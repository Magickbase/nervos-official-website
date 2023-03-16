export function isClient() {
  return typeof window !== 'undefined'
}

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
