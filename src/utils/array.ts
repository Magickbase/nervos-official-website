import { randomInt } from './number'

export function sample<T>(arr: T[]): T | undefined {
  return arr[randomInt(0, arr.length - 1)]
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * Example: range(0, 5) // [0, 1, 2, 3, 4]
 */
export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start }, (_, i) => i + start)
}
