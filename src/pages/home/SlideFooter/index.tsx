import { ComponentProps, FC, Fragment, RefObject, useCallback, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import { Dialog } from '@headlessui/react'
import { useObservableState } from 'observable-hooks'
import { of } from 'rxjs'
import {
  DISABLE_CGOL_MOUSE_CONTROLLER,
  GameController,
  useGameKeyboardHandler,
} from '../../../components/ConwayGameOfLife'
import { api } from '../../../utils/api'
import styles from './index.module.scss'
import PlayIcon from './play.svg'
import PauseIcon from './pause.svg'
import BackIcon from './back.svg'
import StopIcon from './stop.svg'
import PlusIcon from './plus.svg'
import MinusIcon from './minus.svg'
import RandomizeIcon from './randomize.svg'
import InfoIcon from './info.svg'
import { useInterval } from '../../../hooks'

export const SlideFooter: FC<ComponentProps<'div'> & { gameControllerRef: RefObject<GameController> }> = props => {
  const { children, gameControllerRef, className, ...divProps } = props

  const ref = useRef<HTMLDivElement>(null)

  const [autoMode, setAutoMode] = useState(true)
  const [paused] = useObservableState(() => gameControllerRef.current?.paused$ ?? of(true))

  const toggleRunning = useCallback(
    (isByAuto?: boolean) => {
      if (!isByAuto) setAutoMode(false)

      const ctl = gameControllerRef?.current
      if (ctl == null) return

      if (ctl.paused) {
        ctl.play()
      } else {
        ctl.pause()
      }
    },
    [gameControllerRef],
  )

  useInterval(
    () => {
      if (!autoMode) return
      toggleRunning(true)
    },
    5e3,
    [autoMode, toggleRunning],
  )

  const onKeyDown = useGameKeyboardHandler(gameControllerRef, e => e.target === ref.current)

  return (
    <div
      ref={ref}
      className={clsx(styles.slideFooter, className)}
      // The tab index is set so that it can receive keyboard events.
      tabIndex={0}
      onKeyDown={onKeyDown}
      {...divProps}
    >
      <LiveMetrics />

      <div className={styles.scrollTip}>
        <div className={styles.verticalLine} />
      </div>

      <div className={styles.gameControl}>
        <span title="RUN / PAUSE" onClick={() => toggleRunning()}>
          {paused ? <PlayIcon /> : <PauseIcon />}
        </span>
        <span title="REWIND">
          <BackIcon onClick={() => gameControllerRef?.current?.rewind()} />
        </span>
        <span title="CLEAR">
          <StopIcon onClick={() => gameControllerRef?.current?.clear()} />
        </span>
        <span title="ZOOM IN">
          <PlusIcon onClick={() => gameControllerRef?.current?.zoomIn()} />
        </span>
        <span title="ZOOM OUT">
          <MinusIcon onClick={() => gameControllerRef?.current?.zoomOut()} />
        </span>
        <span title="RANDOMIZE PATTERN">
          <RandomizeIcon onClick={() => gameControllerRef?.current?.randomPattern()} />
        </span>

        <InfoDialog />
      </div>
    </div>
  )
}

const LiveMetrics: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'slide_footer' })

  const liveMetricsQuery = api.ckb.liveMetrics.useQuery()
  const { liveCells, stored, daoDeposit } = liveMetricsQuery.data ?? {}
  const dataList = useMemo(
    () => [
      { name: t('live_cells'), value: liveCells },
      { name: t('common_knowledge_stored'), value: stored },
      { name: t('ckb_in_nervos_dao'), value: daoDeposit },
    ],
    [daoDeposit, liveCells, stored, t],
  )

  return (
    <div className={styles.liveMetrics}>
      <div className={styles.title}>
        <i className={styles.dot} />
        <span className={styles.text}>{t('live_metrics')}</span>
      </div>

      {dataList.map(({ name, value }) => (
        <div key={name} className={styles.data}>
          <div className={styles.name}>{name}</div>
          <div className={styles.value}>{value == null ? t('loading') : value}</div>
        </div>
      ))}
    </div>
  )
}

const InfoDialog: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const mouseBindings = [
    { key: 'Left button', bind: 'Move around' },
    { key: 'Right button', bind: 'Create / Delete cells' },
  ]

  const keyboardBindings = [
    { key: 'Arrow keys', bind: 'Move around' },
    { key: '+, -', bind: 'Zoom In and out' },
    { key: 'Space', bind: 'One generation forward' },
    { key: 'Tab', bind: 'Many generation forward' },
    { key: 'Enter', bind: 'Run / Pause' },
    { key: 'Backspace', bind: 'Rewind' },
    { key: ']', bind: 'Faster' },
    { key: '[', bind: 'Slower' },
  ]

  return (
    <>
      <span title="INSTRUCTIONS">
        <InfoIcon onClick={() => setIsOpen(true)} />
      </span>
      <Dialog
        className={clsx(styles.infoDialog, DISABLE_CGOL_MOUSE_CONTROLLER)}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel className={styles.panel}>
          <div className={styles.title}>How to play.</div>
          <div className={styles.subtitle1}>About</div>
          <div className={styles.text1}>
            <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noreferrer">
              {"Conway's Game of Life"}
            </a>{' '}
            is a cellular automation zero-player game that, once initiated, evolves in different and unpredictable
            directions based on its initially determined state. Like blockchains, the cells or automata can evolve into
            stable or chaotic structures depending on their initial hard-coded setup.
          </div>
          <div className={styles.subtitle2}>Controls</div>

          <div className={styles.controls}>
            <div className={styles.keybindings}>
              {mouseBindings.map(binding => (
                <Fragment key={binding.key}>
                  <div>{binding.key}</div>
                  <div>– {binding.bind}</div>
                </Fragment>
              ))}
              <div className={styles.divider} />
              {keyboardBindings.map(binding => (
                <Fragment key={binding.key}>
                  <div>{binding.key}</div>
                  <div>– {binding.bind}</div>
                </Fragment>
              ))}
            </div>

            <div className={styles.uiButtons}>
              <div className={styles.uiButton}>
                <PlayIcon /> Run / Pause
              </div>
              <div className={styles.uiButton}>
                <BackIcon /> Rewind
              </div>
              <div className={styles.uiButton}>
                <StopIcon /> Clear
              </div>
              <div className={styles.uiButton}>
                <PlusIcon /> Zoom in
              </div>
              <div className={styles.uiButton}>
                <MinusIcon /> Zoom out
              </div>
              <div className={styles.uiButton}>
                <RandomizeIcon /> Randomize
              </div>
              <div className={styles.uiButton}>
                <InfoIcon /> Instructions
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.action} onClick={() => setIsOpen(false)}>
              DONE
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
