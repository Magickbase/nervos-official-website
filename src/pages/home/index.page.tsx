import { FC, PropsWithChildren, RefObject, useEffect, useMemo, useRef, useState } from 'react'
import { GetServerSideProps, type NextPage } from 'next'
import clsx from 'clsx'
import { Swiper, SwiperSlide, SwiperSlideProps } from 'swiper/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import interact from 'interactjs'
import type { InteractEvent } from '@interactjs/core/InteractEvent'
import { Portal } from '@headlessui/react'
import Link from 'next/link'
import { useElementIntersecting, useElementSize, useIsMobile } from '../../hooks'
import { ConwayGameOfLife, GameController, useGameKeyboardHandler } from '../../components/ConwayGameOfLife'
import { Page } from '../../components/Page'
import { SlideFooter } from './SlideFooter'
import { Card } from './Card'
import ArrowIcon from './arrow.svg'
import ObliqueArrowIcon from './oblique_arrow.svg'

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
            <SlideCKBSecurity gameControllerRef={controllerRef} />
            <SlideCKBFlexibility gameControllerRef={controllerRef} />
            <SlideCKBSustainability gameControllerRef={controllerRef} />
            <SlideCKBModular gameControllerRef={controllerRef} />
            <SlideGetStarted gameControllerRef={controllerRef} isLastSlide />

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

type ScreenSlideProps = PropsWithChildren<
  SwiperSlideProps & {
    gameControllerRef: RefObject<GameController>
    isLastSlide?: boolean
    autoHeight?: boolean
  }
>

const ScreenSlide: FC<ScreenSlideProps> = props => {
  const { children, isLastSlide, gameControllerRef, autoHeight, className, ...slideProps } = props

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
    <SwiperSlide
      className={clsx(styles.screenSlide, { [styles.autoHeight ?? '']: autoHeight }, className)}
      {...slideProps}
    >
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
allowCustomDescendantOfSwiper(ScreenSlide)

const SlideCKBIntro: FC<ScreenSlideProps> = props => {
  const { t } = useTranslation('home', { keyPrefix: 'slide_ckb_intro' })

  const draggerRef = useGameMouseHandler(props.gameControllerRef)

  return (
    <ScreenSlide {...props}>
      <div ref={draggerRef} className={styles.slideCKBIntro}>
        <div className={styles.titleText}>{t('text1')}</div>
        <div className={styles.subjectTitleText}>{t('text2')}</div>
        <div className={styles.descriptionText}>
          <span className={styles.bold}>Nervos</span>
          {t('text3')}
        </div>
        <div className={clsx(styles.descriptionText, styles.text4)}>{t('text4')}</div>
      </div>
    </ScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideCKBIntro)

const SlideCKBSecurity: FC<ScreenSlideProps> = props => {
  const { t } = useTranslation('home', { keyPrefix: 'slide_ckb_security' })

  const draggerRef = useGameMouseHandler(props.gameControllerRef)

  return (
    <ScreenSlide {...props} className={clsx(presets.themeDark, props.className)}>
      <div ref={draggerRef} className={styles.slideCKBSecurity}>
        {/* html here is for the hyphen */}
        <div className={styles.titleText} dangerouslySetInnerHTML={{ __html: t('text1') }} />
        <div className={styles.descriptionText}>{t('text2')}</div>
      </div>
    </ScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideCKBSecurity)

const SlideCKBFlexibility: FC<ScreenSlideProps> = props => {
  const draggerRef = useGameMouseHandler(props.gameControllerRef)

  return (
    <ScreenSlide {...props} className={clsx(presets.themeLight, props.className)}>
      <div ref={draggerRef} className={styles.slideCKBFlexibility}>
        <div className={styles.titleText}>Unbounded Flexibility and Interopera&shy;bility.</div>
        <ul className={styles.descriptionText}>
          <li>CKB supports all programming languages and current and future cryptographic primitives.</li>
          <li>
            Layer 2 networks built on CKB can deploy different consensus mechanisms, programming languages, execution
            environments, and data availability storage methods.
          </li>
          <li>CKB can speak to and understand the languages of all heterogeneous blockchains.</li>
          <li>Decentralized applications on CKB can be accessed from all blockchain ecosystems.</li>
        </ul>
      </div>
    </ScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideCKBFlexibility)

const SlideCKBSustainability: FC<ScreenSlideProps> = props => {
  const draggerRef = useGameMouseHandler(props.gameControllerRef)

  return (
    <ScreenSlide {...props} className={clsx(presets.themeDark, props.className)}>
      <div ref={draggerRef} className={styles.slideCKBSustainability}>
        <div className={styles.titleText}>Guaranteed Long-term Sustaina&shy;bility.</div>
        <div className={styles.descriptionText}>
          CKB leverages a novel tokenomic model that aligns the interests of all network stakeholders. It ensures the
          miners are paid for providing security in perpetuity, while token holders are protected from inflation.
        </div>
      </div>
    </ScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideCKBSustainability)

const SlideCKBModular: FC<ScreenSlideProps> = props => {
  const draggerRef = useGameMouseHandler(props.gameControllerRef)

  return (
    <ScreenSlide {...props} className={clsx(presets.themeLight, props.className)}>
      <div ref={draggerRef} className={styles.slideCKBModular}>
        <div className={styles.titleText}>Modular Architecture.</div>
        <div className={styles.descriptionText}>
          Nervos was designed as a modular blockchain network from the get-go, meaning it can scale to millions of
          transactions per second through many diverse Layer 2 networks without sacrificing security or
          decentralization.
        </div>
      </div>
    </ScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideCKBModular)

const SlideGetStarted: FC<ScreenSlideProps> = props => {
  const draggerRef = useGameMouseHandler(props.gameControllerRef)
  const isMobile = useIsMobile()

  return (
    <ScreenSlide autoHeight={isMobile} {...props} className={clsx(presets.themeDark, props.className)}>
      <div ref={draggerRef} className={styles.slideGetStarted}>
        <div className={styles.titleText}>Get Started.</div>
        <div className={styles.cards}>
          <Card
            title="Build on hardware, not software."
            actions={
              <Link href="/developers" className={styles.link}>
                DEVELOPERS <ArrowIcon />
              </Link>
            }
          >
            Leverage CKB’s low-level virtual machine to build without limits.
          </Card>

          <Card
            title="Launch your own Layer 2 on CKB with Axon."
            actions={
              // TODO: need external link
              // https://github.com/Magickbase/nervos-official-website/issues/4
              <a href="/" className={styles.link} target="_blank" rel="noreferrer">
                AXON <ObliqueArrowIcon />
              </a>
            }
          >
            Need high throughput? Pick and choose your flavor of Layer 2 and deploy it on CKB with ease.
          </Card>

          <Card
            title="Build universal decentralized applications."
            actions={
              // TODO: need external link
              // https://github.com/Magickbase/nervos-official-website/issues/4
              <a href="/" className={styles.link} target="_blank" rel="noreferrer">
                LEARN MORE <ObliqueArrowIcon />
              </a>
            }
          >
            Build dApps accessible by all wallets, even standard authentication protocols like Apple passkeys.
          </Card>
        </div>
      </div>
    </ScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideGetStarted)

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

    const preventTriggerInteract = (e: HTMLElementEventMap['pointerdown'] | HTMLElementEventMap['touchstart']) => {
      // The InteractEvent received by move listener does not contain the original event,
      // so there is no way to tell if this is a text selection,
      // so in order to cancel the move, we have to stopPropagation here to
      // prevent the event from being passed to interactable and then triggering the move.
      // Since interactable internally listens to the pointerdown event,
      // it must stop bubbling in pointerdown and not in mousedown.
      if (e.currentTarget !== e.target) e.stopPropagation()
    }
    dragger.addEventListener('pointerdown', preventTriggerInteract)
    dragger.addEventListener('touchstart', preventTriggerInteract)

    const preventTextSelect = (e: HTMLElementEventMap['mousedown'] | HTMLElementEventMap['touchstart']) => {
      // This is the allowed move behavior, and to avoid triggering the text selection style, here preventDefault.
      // This preventDefault cannot be executed in pointerdown, otherwise the mousedown event will not be triggered,
      // and the `useOutsideClick` in `@headlessui/react/Popover` is dependent on mousedown.
      if (e.currentTarget === e.target) e.preventDefault()
    }
    dragger.addEventListener('mousedown', preventTextSelect)
    dragger.addEventListener('touchstart', preventTextSelect)

    const onContextMenu = (e: HTMLElementEventMap['contextmenu']) => {
      if (e.target !== draggerRef.current) return
      e.preventDefault()
    }
    dragger.addEventListener('contextmenu', onContextMenu)

    const onMouseDown = (e: HTMLElementEventMap['mousedown']) => {
      if (e.target !== draggerRef.current) return
      gameControllerRef?.current?.onExternalMouseControllerEvent(e)
    }
    dragger.addEventListener('mousedown', onMouseDown)

    const onMouseMove = (e: HTMLElementEventMap['mousemove']) => {
      if (e.target !== draggerRef.current) return
      gameControllerRef?.current?.onExternalMouseControllerEvent(e)
    }
    dragger.addEventListener('mousemove', onMouseMove)

    const onMouseUp = (e: HTMLElementEventMap['mouseup']) => {
      if (e.target !== draggerRef.current) return
      gameControllerRef?.current?.onExternalMouseControllerEvent(e)
    }
    dragger.addEventListener('mouseup', onMouseUp)

    return () => {
      interactable.unset()
      dragger.removeEventListener('pointerdown', preventTriggerInteract)
      dragger.removeEventListener('touchstart', preventTriggerInteract)
      dragger.removeEventListener('mousedown', preventTextSelect)
      dragger.removeEventListener('touchstart', preventTextSelect)
      dragger.removeEventListener('contextmenu', onContextMenu)
      dragger.removeEventListener('mousedown', onMouseDown)
      dragger.removeEventListener('mousemove', onMouseMove)
      dragger.removeEventListener('mouseup', onMouseUp)
    }
  }, [gameControllerRef])

  return draggerRef
}

export default Home
