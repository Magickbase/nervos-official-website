import { KeyboardEventHandler, RefObject, useCallback } from 'react'
import { GameController } from './utils'

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
