export function clampNumber(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max)
}

export function randomInt(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
