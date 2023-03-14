import { FC, PropsWithChildren, RefObject, useEffect, useMemo, useRef, useState } from 'react'
import { GetServerSideProps, type NextPage } from 'next'
import clsx from 'clsx'
import { Swiper, SwiperSlide, SwiperSlideProps } from 'swiper/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import interact from 'interactjs'
import type { InteractEvent } from '@interactjs/core/InteractEvent'
import { Portal } from '@headlessui/react'
import { useElementIntersecting, useElementSize } from '../../hooks'
import { ConwayGameOfLife, GameController, useGameKeyboardHandler } from '../../components/ConwayGameOfLife'
import { Page } from '../../components/Page'
import { SlideFooter } from './SlideFooter'

import presets from '../../styles/presets.module.scss'
import styles from './index.module.scss'

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'home'])),
    },
  }
}

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null)
  const controllerRef = useRef<GameController>(null)
  const initializationIndicatorRef = useRef<HTMLDivElement>(null)

  const onKeyDown = useGameKeyboardHandler(controllerRef, e => e.target === ref.current)

  // Default focus on body, auto-focus this to respond to keyboard events.
  useEffect(() => ref.current?.focus(), [])

  return (
    <Page
      ref={ref}
      // The tab index is set so that it can receive keyboard events.
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {({ renderHeader, renderFooter }) => (
        <>
          <div className={clsx(styles.blendModeHeader)}>{renderHeader()}</div>
          <Swiper
            className={styles.swiper}
            direction="vertical"
            slidesPerView="auto"
            autoHeight
            cssMode={true}
            mousewheel={true}
            // https://stackoverflow.com/questions/53367064/how-to-enable-select-text-in-swiper-js
            simulateTouch={false}
          >
            <SlideCKBIntro gameControllerRef={controllerRef} />
            <SlideCKBSecurity isLastSlide gameControllerRef={controllerRef} />
            {/* TODO: Need to implement other slides */}
            <SwiperSlide className={clsx(styles.footer, presets.themeDark)}>{renderFooter()}</SwiperSlide>
          </Swiper>

          <div className={styles.golContainer}>
            <ConwayGameOfLife ref={controllerRef} initializationIndicatorRef={initializationIndicatorRef} />
            <div ref={initializationIndicatorRef} className={styles.indicator}></div>
          </div>
        </>
      )}
    </Page>
  )
}

type FullScreenSlideProps = PropsWithChildren<
  SwiperSlideProps & { isLastSlide?: boolean; gameControllerRef: RefObject<GameController> }
>

const FullScreenSlide: FC<FullScreenSlideProps> = props => {
  const { children, isLastSlide, gameControllerRef, className, ...slideProps } = props

  const slideFooterContainerRef = useRef<HTMLDivElement>(null)

  const isFullDisplayOfSlideFooterInSwiperContainer = useElementIntersecting(
    slideFooterContainerRef,
    useMemo(() => {
      const opts = {
        threshold: 1,
        root: globalThis.document?.querySelector(`.${styles.swiper ?? ''}`),
      }
      return opts
    }, []),
  )
  // TODO: The difference between the y-axis of slideFooter and swiper should be
  // used to decide whether to enable fixed or not when the slideFooter is not fully displayed,
  // otherwise too much content under the slideFooter will result in a ui mismatch.
  const needFixedSlideFooter = !isFullDisplayOfSlideFooterInSwiperContainer

  const [minHeight, setMinHeight] = useState(0)
  useElementSize(slideFooterContainerRef, ({ height }) => {
    setMinHeight(height)
  })

  return (
    <SwiperSlide className={clsx(styles.fullScreenSlide, className)} {...slideProps}>
      <div className={styles.container}>
        <div className={styles.headerMixLayer} />
        <div className={styles.content}>{children}</div>

        {isLastSlide && (
          <div
            ref={slideFooterContainerRef}
            // Prevent the layout from being affected when switching to fixed mode.
            style={{ minHeight }}
          >
            {!needFixedSlideFooter ? (
              <SlideFooter gameControllerRef={gameControllerRef} />
            ) : (
              // The `swiper-wrapper` element has `translate3d` style on it,
              // here the `Portal` is used to avoid `fixed` being limited by it.
              <Portal>
                <SlideFooter className={styles.fixedSlideFooter} gameControllerRef={gameControllerRef} />
              </Portal>
            )}
          </div>
        )}
      </div>
    </SwiperSlide>
  )
}
allowCustomDescendantOfSwiper(FullScreenSlide)

const SlideCKBIntro: FC<FullScreenSlideProps> = props => {
  const { t } = useTranslation('home', { keyPrefix: 'slide_ckb_intro' })

  const draggerRef = useGameMouseHandler(props.gameControllerRef)

  return (
    <FullScreenSlide {...props}>
      <div ref={draggerRef} className={styles.slideCKBIntro}>
        <div className={styles.text1}>{t('text1')}</div>
        <div className={styles.text2}>{t('text2')}</div>
        <div className={styles.text3}>
          <span className={styles.bold}>Nervos</span>
          {t('text3')}
        </div>
        <div className={styles.text4}>{t('text4')}</div>
      </div>
    </FullScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideCKBIntro)

const SlideCKBSecurity: FC<FullScreenSlideProps> = props => {
  const { t } = useTranslation('home', { keyPrefix: 'slide_ckb_security' })

  const draggerRef = useGameMouseHandler(props.gameControllerRef)

  return (
    <FullScreenSlide {...props} className={clsx(presets.themeDark, props.className)}>
      <div ref={draggerRef} className={styles.slideCKBSecurity}>
        {/* html here is for the hyphen */}
        <div className={styles.text1} dangerouslySetInnerHTML={{ __html: t('text1') }} />
        <div className={styles.text2}>{t('text2')}</div>
      </div>
    </FullScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideCKBSecurity)

// Swiper only allows SwiperSlide as a child component by default,
// This function wraps a normal component into a sub-level component allowed by Swiper.
// https://github.com/nolimits4web/swiper/blob/0c8ae8bda504f94c0fd00d9d34920f7ff0d53adc/src/react/get-children.js#L3
function allowCustomDescendantOfSwiper(comp: { displayName?: string }) {
  if (comp.displayName == null) {
    comp.displayName = 'CustomDescendant'
  }
  if (!comp.displayName.includes('SwiperSlide')) {
    comp.displayName = comp.displayName + '_SwiperSlide'
  }
}

function useGameMouseHandler(gameControllerRef?: RefObject<GameController>) {
  const draggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dragger = draggerRef.current
    if (dragger == null) return

    const interactable = interact(dragger, {
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

    const onDragStart = (e: HTMLElementEventMap['pointerdown'] | HTMLElementEventMap['touchstart']) => {
      // This is the allowed move behavior, and to avoid triggering the text selection style, here preventDefault.
      if (e.currentTarget === e.target) e.preventDefault()
      // The InteractEvent received by move listener does not contain the original event,
      // so there is no way to tell if this is a text selection,
      // so in order to cancel the move, we have to stopPropagation here to
      // prevent the event from being passed to interactable and then triggering the move.
      else e.stopPropagation()
    }
    dragger.addEventListener('pointerdown', onDragStart)
    dragger.addEventListener('touchstart', onDragStart)

    const onContextMenu = (e: HTMLElementEventMap['contextmenu']) => {
      if (e.target === draggerRef.current) {
        e.preventDefault()
        gameControllerRef?.current?.onExternalMouseControllerEvent(e)
      }
    }
    dragger.addEventListener('contextmenu', onContextMenu)

    return () => {
      interactable.unset()
      dragger.removeEventListener('pointerdown', onDragStart)
      dragger.removeEventListener('touchstart', onDragStart)
      dragger.removeEventListener('contextmenu', onContextMenu)
    }
  }, [gameControllerRef])

  return draggerRef
}

export default Home
