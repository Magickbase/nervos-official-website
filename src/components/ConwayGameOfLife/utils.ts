import { Observable } from 'rxjs'
import { GOLPattern } from './patterns'

export interface GameState {
  cellLifeStates: Record<RowIndex, Record<ColIndex, number>>
}
export type RowIndex = number
export type ColIndex = number

export interface GameController {
  step: () => void
  rewind: () => void
  play: () => void
  pause: () => void
  paused: boolean
  paused$: Observable<boolean>
  speedDown: () => void
  speedUp: () => void
  randomPattern: () => void
  clear: () => void

  getCellLiving: (row: number, col: number) => boolean
  setCellLiving: (row: number, col: number, value: boolean) => void

  zoomIn: () => void
  zoomOut: () => void

  addCameraOffset: (x: number, y: number) => void
  getCellIndexFromExternalMouseControlEvent: (e?: {
    clientX: number
    clientY: number
  }) => { row: number; col: number } | null
}

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
] as const

export function stepGame(state: GameState, maxCalcRadius = 100): GameState {
  const { cellLifeStates } = state
  const nextCellLifeStates: GameState['cellLifeStates'] = {}

  Object.entries(cellLifeStates).forEach(([_row, colStates]) => {
    const row = parseInt(_row)
    Object.entries(colStates).forEach(([_col, state]) => {
      if (state === 0) return
      const col = parseInt(_col)
      const mayLiveCells = [
        [row, col],
        ...operations.map(([offsetRow, offsetCol]) => [row + offsetRow, col + offsetCol]),
      ] as const

      mayLiveCells.forEach(([row, col]) => {
        const isCalculated = nextCellLifeStates[row]?.[col] != null
        if (isCalculated) return

        const colStates = (nextCellLifeStates[row] ||= {})
        const isBeyondLimit = Math.abs(row) > maxCalcRadius || Math.abs(col) > maxCalcRadius
        colStates[col] = !isBeyondLimit && isLivingInNextStep(cellLifeStates, row, col) ? 1 : 0
      })
    })
  })

  return { ...state, cellLifeStates: nextCellLifeStates }
}

export function patternToCellLifeStates(pattern: GOLPattern): GameState['cellLifeStates'] {
  const cellLifeStates: GameState['cellLifeStates'] = {}
  pattern.forEach(point => {
    const colStates = (cellLifeStates[point.y] ||= {})
    colStates[point.x] = 1
  })
  return cellLifeStates
}

function isLiving(cellLifeStates: GameState['cellLifeStates'], row: number, col: number): boolean {
  return (cellLifeStates[row]?.[col] ?? 0) > 0
}

function isLivingInNextStep(cellLifeStates: GameState['cellLifeStates'], row: number, col: number): boolean {
  let neighbors = 0
  operations.forEach(([offsetRow, offsetCol]) => {
    const newRow = row + offsetRow
    const newCol = col + offsetCol
    const nearCellLifeState = cellLifeStates[newRow]?.[newCol] ?? 0
    neighbors += nearCellLifeState
  })

  const isCurrentLiving = isLiving(cellLifeStates, row, col)
  if (isCurrentLiving) {
    // underpopulation or overpopulation
    return !(neighbors < 2 || neighbors > 3)
  }

  // reproduction
  return neighbors === 3
}

export interface Rect {
  top: number
  right: number
  bottom: number
  left: number
}

export interface Point {
  x: number
  y: number
}
