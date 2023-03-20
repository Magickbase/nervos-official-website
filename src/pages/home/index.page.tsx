import { FC, PropsWithChildren, RefObject, useEffect, useMemo, useRef, useState } from 'react'
import { GetServerSideProps, type NextPage } from 'next'
import clsx from 'clsx'
import { Swiper, SwiperSlide, SwiperSlideProps } from 'swiper/react'
import { Mousewheel } from 'swiper'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Portal } from '@headlessui/react'
import Link from 'next/link'
import { useElementIntersecting, useElementSize, useIsMobile } from '../../hooks'
import {
  ConwayGameOfLife,
  DISABLE_CGOL_MOUSE_CONTROLLER,
  GameController,
  useGameKeyboardHandler,
  useGameMouseHandler,
} from '../../components/ConwayGameOfLife'
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

  const isOnOperableArea = useGameMouseHandler(controllerRef)
  const onKeyDown = useGameKeyboardHandler(controllerRef, e => e.target === ref.current)

  // Default focus on body, auto-focus this to respond to keyboard events.
  useEffect(() => ref.current?.focus(), [])

  return (
    <Page
      ref={ref}
      // The tab index is set so that it can receive keyboard events.
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={clsx({ [styles.isOnOperableArea ?? '']: isOnOperableArea })}
    >
      {({ renderHeader, renderFooter }) => (
        <>
          <div className={clsx(styles.blendModeHeader)}>{renderHeader()}</div>
          <Swiper
            className={styles.swiper}
            direction="vertical"
            slidesPerView="auto"
            autoHeight
            mousewheel={{
              // Supports operations from some Portal to elements outside the swiper container, such as SlideFooter.
              eventsTarget: 'body',
            }}
            modules={[Mousewheel]}
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

  return (
    <ScreenSlide {...props}>
      <div className={styles.slideCKBIntro}>
        <div className={clsx(styles.titleText, DISABLE_CGOL_MOUSE_CONTROLLER)}>{t('text1')}</div>
        <div className={clsx(styles.subjectTitleText, DISABLE_CGOL_MOUSE_CONTROLLER)}>{t('text2')}</div>
        <div className={clsx(styles.descriptionText, DISABLE_CGOL_MOUSE_CONTROLLER)}>
          <span className={styles.bold}>Nervos</span>
          {t('text3')}
        </div>
        <div className={clsx(styles.descriptionText, styles.text4, DISABLE_CGOL_MOUSE_CONTROLLER)}>{t('text4')}</div>
      </div>
    </ScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideCKBIntro)

const SlideCKBSecurity: FC<ScreenSlideProps> = props => {
  const { t } = useTranslation('home', { keyPrefix: 'slide_ckb_security' })

  return (
    <ScreenSlide {...props} className={clsx(presets.themeDark, props.className)}>
      <div className={styles.slideCKBSecurity}>
        {/* html here is for the hyphen */}
        <div
          className={clsx(styles.titleText, DISABLE_CGOL_MOUSE_CONTROLLER)}
          dangerouslySetInnerHTML={{ __html: t('text1') }}
        />
        <div className={clsx(styles.descriptionText, DISABLE_CGOL_MOUSE_CONTROLLER)}>{t('text2')}</div>
      </div>
    </ScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideCKBSecurity)

const SlideCKBFlexibility: FC<ScreenSlideProps> = props => {
  return (
    <ScreenSlide {...props} className={clsx(presets.themeLight, props.className)}>
      <div className={styles.slideCKBFlexibility}>
        <div className={clsx(styles.titleText, DISABLE_CGOL_MOUSE_CONTROLLER)}>
          Unbounded Flexibility and Interopera&shy;bility.
        </div>
        <ul className={clsx(styles.descriptionText, DISABLE_CGOL_MOUSE_CONTROLLER)}>
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
  return (
    <ScreenSlide {...props} className={clsx(presets.themeDark, props.className)}>
      <div className={styles.slideCKBSustainability}>
        <div className={clsx(styles.titleText, DISABLE_CGOL_MOUSE_CONTROLLER)}>
          Guaranteed Long-term Sustaina&shy;bility.
        </div>
        <div className={clsx(styles.descriptionText, DISABLE_CGOL_MOUSE_CONTROLLER)}>
          CKB leverages a novel tokenomic model that aligns the interests of all network stakeholders. It ensures the
          miners are paid for providing security in perpetuity, while token holders are protected from inflation.
        </div>
      </div>
    </ScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideCKBSustainability)

const SlideCKBModular: FC<ScreenSlideProps> = props => {
  return (
    <ScreenSlide {...props} className={clsx(presets.themeLight, props.className)}>
      <div className={styles.slideCKBModular}>
        <div className={clsx(styles.titleText, DISABLE_CGOL_MOUSE_CONTROLLER)}>Modular Architecture.</div>
        <div className={clsx(styles.descriptionText, DISABLE_CGOL_MOUSE_CONTROLLER)}>
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
  const isMobile = useIsMobile()

  return (
    <ScreenSlide autoHeight {...props} className={clsx(presets.themeDark, props.className)}>
      <div className={styles.slideGetStarted}>
        <div className={clsx(styles.titleText, DISABLE_CGOL_MOUSE_CONTROLLER)}>Get Started.</div>
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

export default Home
