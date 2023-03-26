/**
 * Modified from
 * https://github.com/alibaba/hooks/blob/fa9afea06aea09bb8f0af377f8a94bc8b5b662e4/packages/hooks/src/useMouse/index.ts
 */
import { RefObject, useEffect, useState } from 'react'

export interface CursorState {
  screenX: number
  screenY: number
  clientX: number
  clientY: number
  pageX: number
  pageY: number
  elementX: number
  elementY: number
  elementH: number
  elementW: number
  elementPosX: number
  elementPosY: number
}

const initState: CursorState = {
  screenX: NaN,
  screenY: NaN,
  clientX: NaN,
  clientY: NaN,
  pageX: NaN,
  pageY: NaN,
  elementX: NaN,
  elementY: NaN,
  elementH: NaN,
  elementW: NaN,
  elementPosX: NaN,
  elementPosY: NaN,
}

export function useMouse(ref?: RefObject<HTMLElement>) {
  const [state, setState] = useState(initState)

  useEffect(() => {
    const target = ref?.current ?? document.body

    const onMouseMove = (event: MouseEvent) => {
      const { screenX, screenY, clientX, clientY, pageX, pageY } = event
      const newState = {
        screenX,
        screenY,
        clientX,
        clientY,
        pageX,
        pageY,
        elementX: NaN,
        elementY: NaN,
        elementH: NaN,
        elementW: NaN,
        elementPosX: NaN,
        elementPosY: NaN,
      }
      const { left, top, width, height } = target.getBoundingClientRect()
      newState.elementPosX = left + window.pageXOffset
      newState.elementPosY = top + window.pageYOffset
      newState.elementX = pageX - newState.elementPosX
      newState.elementY = pageY - newState.elementPosY
      newState.elementW = width
      newState.elementH = height

      setState(newState)
    }

    target.addEventListener('mousemove', onMouseMove)
    return () => target.removeEventListener('mousemove', onMouseMove)
  }, [ref])

  return state
}
