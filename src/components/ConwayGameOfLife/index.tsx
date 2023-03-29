import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useMemo,
  RefObject,
  Dispatch,
  SetStateAction,
} from 'react'
import { BehaviorSubject } from 'rxjs'
import { sample } from '../../utils/array'
import { useDevicePixelRatio, useElementSize, useInterval, useIsMobile } from '../../hooks'
import { clampNumber } from '../../utils/number'
import { patterns, GOLPattern } from './patterns'
import { GameController, GameState, patternToCellLifeStates, Point, Rect, stepGame } from './utils'
import { mouseEventOffset } from '../../utils'
import styles from './index.module.scss'

export type { GameController, GameState } from './utils'
export * from './useGameKeybindings'

export const ConwayGameOfLife = forwardRef<GameController, { initializationIndicatorRef: RefObject<HTMLElement> }>(
  function ConwayGameOfLife(props, ref) {
    const isMobile = useIsMobile(true)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const [gameStateHistory, setGameStateHistory] = useState<GameState[]>([])
    const [gameState, _setGameState] = useState<GameState>({ cellLifeStates: {} })
    const setGameState: Dispatch<SetStateAction<GameState>> = useCallback(value => {
      _setGameState(oldValue => {
        const newValue = typeof value === 'function' ? value(oldValue) : value
        setGameStateHistory(history => [...history, oldValue])
        return newValue
      })
    }, [])
    const rewind = useCallback(() => {
      const lastIdx = gameStateHistory.length - 1
      const last = gameStateHistory[lastIdx]
      if (last == null) return
      _setGameState(last)
      setGameStateHistory(gameStateHistory.slice(0, lastIdx))
    }, [gameStateHistory])

    const cellSize = 6
    const cellGap = 2
    const pixelRatio = useDevicePixelRatio()

    const [zoomLevel, setZoomLevel] = useState(isMobile ? -2 : 0)
    const zoomFromLevel = useMemo(
      () => (zoomLevel === 0 ? 1 : zoomLevel > 0 ? 1 + zoomLevel : 1 - Math.abs(zoomLevel) * 0.25),
      [zoomLevel],
    )

    const numberOfCellsAllowedWithinRadius = useNumberOfCellsAllowedWithinRadius(cellSize, cellGap)
    const sceneRect = useMemo<Rect>(() => {
      const radiusSize = numberOfCellsAllowedWithinRadius * (cellSize + cellGap)
      return {
        top: -radiusSize,
        right: radiusSize,
        bottom: radiusSize,
        left: -radiusSize,
      }
    }, [numberOfCellsAllowedWithinRadius])
    const [viewportRect, setViewportRect] = useState<Rect>({ top: 0, right: 0, bottom: 0, left: 0 })
    const { offset, setOffsetWithClamp, zoom, setZoom } = useViewport(sceneRect, viewportRect, zoomFromLevel)
    useEffect(() => setZoom(zoomFromLevel), [setZoom, zoomFromLevel])

    const drawCells = useCallback(() => {
      const canvas = canvasRef.current
      if (canvas == null) return
      const ctx = canvas.getContext('2d')
      if (ctx == null) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      Object.entries(gameState.cellLifeStates).forEach(([row, colStates]) => {
        Object.entries(colStates).forEach(([col, state]) => {
          if (state === 0) return
          ctx.fillRect(
            (-offset.x + cellGap / 2 + parseInt(col) * (cellSize + cellGap)) * pixelRatio * zoom,
            (-offset.y + cellGap / 2 + parseInt(row) * (cellSize + cellGap)) * pixelRatio * zoom,
            cellSize * pixelRatio * zoom,
            cellSize * pixelRatio * zoom,
          )
        })
      })
    }, [gameState.cellLifeStates, offset.x, offset.y, pixelRatio, zoom])

    useEffect(drawCells, [drawCells])

    useElementSize(canvasRef, () => {
      const canvas = canvasRef.current
      if (canvas == null) return
      const rect = canvas.getBoundingClientRect()
      setViewportRect(rect)
      // https://stackoverflow.com/a/35244519
      canvas.width = Math.round(pixelRatio * rect.right) - Math.round(pixelRatio * rect.left)
      canvas.height = Math.round(pixelRatio * rect.bottom) - Math.round(pixelRatio * rect.top)

      drawCells()
    })

    const setOffsetToIndicator = useCallback(
      (pattern: GOLPattern) => {
        const indicator = props.initializationIndicatorRef.current
        const canvas = canvasRef.current
        if (indicator == null || canvas == null) return

        const patternRect = pattern.reduce(
          (rect, point) => {
            if (point.x < rect.left) rect.left = point.x
            if (point.x > rect.right) rect.right = point.x
            if (point.y < rect.top) rect.top = point.y
            if (point.y > rect.bottom) rect.bottom = point.y
            return rect
          },
          { top: 0, right: 0, bottom: 0, left: 0 } as Rect,
        )
        const patternWidth = patternRect.right * (cellSize + cellGap)
        const patternHeight = patternRect.bottom * (cellSize + cellGap)

        const canvasRect = canvas.getBoundingClientRect()
        const indicatorRect = indicator.getBoundingClientRect()
        const overlappingRect = {
          left: clampNumber(indicatorRect.left, canvasRect.left, indicatorRect.right),
          right: clampNumber(indicatorRect.right, canvasRect.left, indicatorRect.right),
          top: clampNumber(indicatorRect.top, canvasRect.top, indicatorRect.bottom),
          bottom: clampNumber(indicatorRect.bottom, canvasRect.top, indicatorRect.bottom),
        }
        const offsetOfOverlappingRect = {
          left: overlappingRect.left - canvasRect.left,
          right: overlappingRect.right - canvasRect.right,
          top: overlappingRect.top - canvasRect.top,
          bottom: overlappingRect.bottom - canvasRect.bottom,
        }

        const offset: Point = { x: 0, y: 0 }
        if (offsetOfOverlappingRect.left != 0) offset.x = offsetOfOverlappingRect.left
        else if (offsetOfOverlappingRect.right != 0)
          offset.x = canvasRect.right - canvasRect.left - patternWidth - offsetOfOverlappingRect.right
        if (offsetOfOverlappingRect.top != 0) offset.y = offsetOfOverlappingRect.top
        else if (offsetOfOverlappingRect.bottom != 0)
          offset.y = canvasRect.bottom - canvasRect.top - patternHeight - offsetOfOverlappingRect.bottom
        setOffsetWithClamp({ x: -(offset.x / zoom), y: -(offset.y / zoom) })
      },
      [props.initializationIndicatorRef, setOffsetWithClamp, zoom],
    )

    const [speedLevel, setSpeedLevel] = useState(0)
    const stepIntervalTime = useMemo(
      () => (speedLevel === 0 ? 1 : speedLevel > 0 ? Math.pow(2, speedLevel) : 1 - Math.abs(speedLevel) * 0.25) * 100,
      [speedLevel],
    )

    const [running, setRunning] = useState(false)
    useInterval(
      () => {
        if (!running) return
        setGameState(state => stepGame(state, numberOfCellsAllowedWithinRadius))
      },
      stepIntervalTime,
      [numberOfCellsAllowedWithinRadius, running],
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const paused$ = useMemo(() => new BehaviorSubject(!running), [])
    useEffect(() => paused$.next(!running), [paused$, running])

    useImperativeHandle(
      ref,
      () => ({
        step() {
          setGameState(state => stepGame(state, numberOfCellsAllowedWithinRadius))
        },
        rewind,
        play() {
          setRunning(true)
        },
        pause() {
          setRunning(false)
        },
        paused: !running,
        paused$: paused$,
        speedDown() {
          setSpeedLevel(level => Math.min(level + 1, 3))
        },
        speedUp() {
          setSpeedLevel(level => Math.max(level - 1, -3))
        },
        randomPattern() {
          // TODO: Exclude the current pattern.
          const pattern = sample(patterns)
          if (pattern == null) return
          setGameState(gameState => {
            return {
              ...gameState,
              cellLifeStates: patternToCellLifeStates(pattern),
            }
          })
        },
        clear() {
          setGameState(gameState => {
            return {
              ...gameState,
              cellLifeStates: {},
            }
          })
        },
        getCellLiving(row, col) {
          return (gameState.cellLifeStates[row]?.[col] ?? 0) !== 0
        },
        setCellLiving(row, col, value) {
          setGameState(state => ({
            ...state,
            cellLifeStates: {
              ...state.cellLifeStates,
              [row]: {
                ...state.cellLifeStates[row],
                [col]: value ? 1 : 0,
              },
            },
          }))
        },

        zoomIn() {
          setZoomLevel(level => Math.min(level + 1, 3))
        },
        zoomOut() {
          setZoomLevel(level => Math.max(level - 1, -3))
        },

        addCameraOffset(x, y) {
          setOffsetWithClamp(offset => ({
            x: offset.x - x / zoom,
            y: offset.y - y / zoom,
          }))
        },
        getCellIndexFromExternalMouseControlEvent(e) {
          if (e == null) return null
          if (canvasRef.current == null) return null
          const coordsInCanvas = mouseEventOffset(e, canvasRef.current)
          const coordsInViewport = {
            x: (coordsInCanvas.x * pixelRatio) / zoom,
            y: (coordsInCanvas.y * pixelRatio) / zoom,
          }
          const coordsInScene = {
            x: coordsInViewport.x + offset.x * pixelRatio,
            y: coordsInViewport.y + offset.y * pixelRatio,
          }
          const cellIndex = {
            row: Math.floor(coordsInScene.y / ((cellSize + cellGap) * pixelRatio)),
            col: Math.floor(coordsInScene.x / ((cellSize + cellGap) * pixelRatio)),
          }
          return cellIndex
        },
      }),
      [
        gameState.cellLifeStates,
        numberOfCellsAllowedWithinRadius,
        offset.x,
        offset.y,
        paused$,
        pixelRatio,
        rewind,
        running,
        setGameState,
        setOffsetWithClamp,
        zoom,
      ],
    )

    useEffect(() => {
      const pattern = sample(patterns)
      if (pattern == null) return
      setGameState(gameState => {
        return {
          ...gameState,
          cellLifeStates: patternToCellLifeStates(pattern),
        }
      })
      setOffsetToIndicator(pattern)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <canvas ref={canvasRef} className={styles.game} />
  },
)

function useNumberOfCellsAllowedWithinRadius(cellSize: number, cellGap: number) {
  return useMemo(() => {
    const longEdgeSize = Math.max(globalThis.screen?.width ?? 1920, globalThis.screen?.height ?? 1080)
    const radius = longEdgeSize / 2
    const multiplying = 4
    return Math.round((radius / (cellSize + cellGap)) * multiplying)
  }, [cellGap, cellSize])
}

function useViewport(sceneRect: Rect, viewportRect: Rect, defaultZoom = 1) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(defaultZoom)

  const offsetClamp = useMemo(
    () => ({
      minX: sceneRect.left,
      maxX: sceneRect.right - (viewportRect.right - viewportRect.left) / zoom,
      minY: sceneRect.top,
      maxY: sceneRect.bottom - (viewportRect.bottom - viewportRect.top) / zoom,
    }),
    [sceneRect.bottom, sceneRect.left, sceneRect.right, sceneRect.top, viewportRect, zoom],
  )

  const setOffsetWithClamp = useCallback(
    (getNewOffset: Point | ((prevOffset: Point) => Point)) => {
      setOffset(prevOffset => {
        const offset = typeof getNewOffset === 'object' ? getNewOffset : getNewOffset(prevOffset)
        return {
          x: clampNumber(offset.x, offsetClamp.minX, offsetClamp.maxX),
          y: clampNumber(offset.y, offsetClamp.minY, offsetClamp.maxY),
        }
      })
    },
    [offsetClamp.maxX, offsetClamp.maxY, offsetClamp.minX, offsetClamp.minY],
  )

  // Auto clamp offset on range change.
  useEffect(() => setOffsetWithClamp(offset => offset), [setOffsetWithClamp])

  // TODO: setZoomWithViewportCenter

  return { offset, setOffsetWithClamp, zoom, setZoom, offsetClamp }
}
