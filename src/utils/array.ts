import { randomInt } from './number'

export function sample<T>(arr: T[]): T | undefined {
  return arr[randomInt(0, arr.length - 1)]
}
