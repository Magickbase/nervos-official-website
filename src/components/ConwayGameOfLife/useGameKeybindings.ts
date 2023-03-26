import interact from 'interactjs'
import type { InteractEvent } from '@interactjs/core/InteractEvent'
import { KeyboardEventHandler, RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { GameController } from './utils'

// When useGameMouseHandler is enabled on a page, you need to add this class
// if you want an element to operate normally and not be hijacked by the game controller.
export const DISABLE_CGOL_MOUSE_CONTROLLER = 'disable_cgol_mouse_controller'

export function useGameKeyboardHandler(
  controllerRef: RefObject<GameController>,
  eventFilter?: (event: Parameters<KeyboardEventHandler>[0]) => boolean,
) {
  const onKeyDown: KeyboardEventHandler = useCallback(
    e => {
      if (eventFilter && !eventFilter(e)) return
      const ctl = controllerRef.current
      if (ctl == null) return

      const stepDistance = 24

      switch (e.code) {
        case 'ArrowUp':
          ctl.addCameraOffset(0, -stepDistance)
          break
        case 'ArrowRight':
          ctl.addCameraOffset(stepDistance, 0)
          break
        case 'ArrowDown':
          ctl.addCameraOffset(0, stepDistance)
          break
        case 'ArrowLeft':
          ctl.addCameraOffset(-stepDistance, 0)
          break
        case 'Equal':
          ctl.zoomIn()
          break
        case 'Minus':
          ctl.zoomOut()
          break
        case 'Backspace':
          ctl.rewind()
          break
        case 'Space':
          ctl.step()
          break

        case 'Tab':
          for (let i = 0; i < 5; i++) {
            ctl.step()
          }
          e.preventDefault()
          break

        case 'Enter':
          if (ctl.paused) {
            ctl.play()
          } else {
            ctl.pause()
          }
          break

        case 'BracketLeft':
          ctl.speedDown()
          break
        case 'BracketRight':
          ctl.speedUp()
          break
      }
    },
    [controllerRef, eventFilter],
  )

  return onKeyDown
}

export function useGameMouseHandler(
  gameControllerRef?: RefObject<GameController>,
  opts: {
    rootElement?: HTMLElement
  } = {},
) {
  const mouseControllerData = useRef<{
    affectedCellIndexes: { row: number; col: number }[]
    affectMode?: true | false
  }>()

  const [isOnOperableArea, setIsOnOperableArea] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    // The default is body instead of document, because interact does not seem
    // to support document directly (draggable does not respond when passed in).
    const root = opts.rootElement ?? document.body

    const interactable = interact(root, {
      // Avoid not being able to select the text of sub-level elements.
      preventDefault: 'never',
    }).draggable({
      // Default cursor is `move`, here empty string means no setting.
      cursorChecker: () => '',
      listeners: {
        move(e: InteractEvent) {
          gameControllerRef?.current?.addCameraOffset(e.dx, e.dy)
        },
      },
    })

    const isAllowedGameControlEvent = (e: PointerEvent | MouseEvent | TouchEvent) => {
      const cellIndex = gameControllerRef?.current?.getCellIndexFromExternalMouseControlEvent(
        e instanceof TouchEvent ? e.touches[0] : e,
      )
      if (cellIndex == null) return false

      // If the click is on a live cell, it is treated as a direct game operation.
      if (gameControllerRef?.current?.getCellLiving(cellIndex.row, cellIndex.col)) return true

      return e.target instanceof Element && !e.target.closest(`.${DISABLE_CGOL_MOUSE_CONTROLLER}`)
    }

    const preventTriggerInteract = (e: HTMLElementEventMap['pointerdown'] | HTMLElementEventMap['touchstart']) => {
      // The InteractEvent received by move listener does not contain the original event,
      // so there is no way to tell if this is a text selection,
      // so in order to cancel the move, we have to stopPropagation here to
      // prevent the event from being passed to interactable and then triggering the move.
      // Since interactable internally listens to the pointerdown event,
      // it must stop bubbling in pointerdown and not in mousedown.
      if (!isAllowedGameControlEvent(e)) e.stopPropagation()
    }
    root.addEventListener('pointerdown', preventTriggerInteract)
    root.addEventListener('touchstart', preventTriggerInteract)

    const preventTextSelect = (e: HTMLElementEventMap['mousedown'] | HTMLElementEventMap['touchstart']) => {
      // This is the allowed move behavior, and to avoid triggering the text selection style, here preventDefault.
      // This preventDefault cannot be executed in pointerdown, otherwise the mousedown event will not be triggered,
      // and the `useOutsideClick` in `@headlessui/react/Popover` is dependent on mousedown.
      if (isAllowedGameControlEvent(e)) e.preventDefault()
    }
    root.addEventListener('mousedown', preventTextSelect)
    root.addEventListener('touchstart', preventTextSelect)

    let prevRightClickEvent: MouseEvent | null = null

    const onMouseDown = (e: HTMLElementEventMap['mousedown']) => {
      const isRightClick = e.button === 2
      if (!isAllowedGameControlEvent(e) || !isRightClick) return
      prevRightClickEvent = e

      mouseControllerData.current = { affectedCellIndexes: [] }
      setIsDrawing(true)
      // This is just reusing the logic from the move, there is no special use for it。
      onMouseMove(e)
    }
    root.addEventListener('mousedown', onMouseDown)

    const onMouseMove = (e: HTMLElementEventMap['mousemove']) => {
      setIsOnOperableArea(isAllowedGameControlEvent(e))

      // The logic here is coupled with onMouseDown and onMouseUp.
      const ctlData = mouseControllerData.current
      if (ctlData == null) return

      const cellIndex = gameControllerRef?.current?.getCellIndexFromExternalMouseControlEvent(e)
      if (cellIndex == null) return

      const isAffected = ctlData.affectedCellIndexes.some(
        index => index.col === cellIndex.col && index.row === cellIndex.row,
      )
      if (isAffected) return
      ctlData.affectedCellIndexes.push(cellIndex)

      if (ctlData.affectMode == null) {
        ctlData.affectMode = !gameControllerRef?.current?.getCellLiving(cellIndex.row, cellIndex.col)
      }
      gameControllerRef?.current?.setCellLiving(cellIndex.row, cellIndex.col, ctlData.affectMode)
    }
    root.addEventListener('mousemove', onMouseMove)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onMouseUp = (e: HTMLElementEventMap['mouseup']) => {
      mouseControllerData.current = undefined
      setIsDrawing(false)
    }
    root.addEventListener('mouseup', onMouseUp)

    // This event is triggered later than mousedown, and it is possible
    // that `setCellLiving` has already been executed when this event is triggered,
    // so the result of isAllowedGameControlEvent will not meet the expectation.
    // So here we need to implement the correct logic by coupling with mousedown.
    const onContextMenu = (e: HTMLElementEventMap['contextmenu']) => {
      const isTriggeredByPrevRightClick =
        prevRightClickEvent &&
        prevRightClickEvent.target === e.target &&
        prevRightClickEvent.clientX === e.clientX &&
        prevRightClickEvent.clientY === e.clientY
      if (!isTriggeredByPrevRightClick) return

      e.preventDefault()
    }
    root.addEventListener('contextmenu', onContextMenu)

    return () => {
      interactable.unset()
      root.removeEventListener('pointerdown', preventTriggerInteract)
      root.removeEventListener('touchstart', preventTriggerInteract)
      root.removeEventListener('mousedown', preventTextSelect)
      root.removeEventListener('touchstart', preventTextSelect)
      root.removeEventListener('mousedown', onMouseDown)
      root.removeEventListener('mousemove', onMouseMove)
      root.removeEventListener('mouseup', onMouseUp)
      root.removeEventListener('contextmenu', onContextMenu)
    }
  }, [gameControllerRef, opts.rootElement])

  return { isOnOperableArea, isDrawing }
}
