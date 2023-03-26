import camelcaseKeys from 'camelcase-keys'

export function isClient() {
  return typeof window !== 'undefined'
}

export const toCamelcase = <T>(object: any): T => {
  return deepClone(camelcaseKeys(object, { deep: true }))
}

export const deepClone = <T>(object: unknown): T => JSON.parse(JSON.stringify(object)) as T

export function mouseEventOffset(ev: { clientX: number; clientY: number }, target: Element) {
  const cx = ev.clientX
  const cy = ev.clientY
  const rect = target.getBoundingClientRect()
  return { x: cx - rect.left, y: cy - rect.top }
}

export * from './markdownToHtml'
export * from './api'
export * from './number'
export * from './time'
export * from './github'
