import { FC, Fragment, PropsWithChildren, RefObject, useEffect, useMemo, useRef, useState } from 'react'
import { GetServerSideProps, type NextPage } from 'next'
import clsx from 'clsx'
import { Swiper, SwiperSlide, SwiperSlideProps } from 'swiper/react'
import { Mousewheel } from 'swiper'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Portal, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useElementIntersecting, useElementSize, useIsMobile, useMouse } from '../../hooks'
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
  const { t } = useTranslation('home')
  const isMobile = useIsMobile()

  const ref = useRef<HTMLDivElement>(null)
  const controllerRef = useRef<GameController>(null)
  const initializationIndicatorRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const showScrollDownTip = activeIdx === 0

  const mousePos = useMouse()

  const { isOnOperableArea, isDrawing } = useGameMouseHandler(controllerRef)
  const onKeyDown = useGameKeyboardHandler(controllerRef, e => e.target === ref.current)

  // Default focus on body, auto-focus this to respond to keyboard events.
  useEffect(() => ref.current?.focus(), [])

  const [hasDrawn, setHasDrawn] = useState(false)
  useEffect(() => {
    isDrawing && setHasDrawn(true)
  }, [isDrawing])

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
          {renderHeader({ className: styles.header })}
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
            onActiveIndexChange={swiper => setActiveIdx(swiper.activeIndex)}
            // In chrome, providing a y value with a decimal point to translate3d
            // causes a 1px gap between the footer and the previous slide,
            // which appears to be a browser bug, so here's a simple fix.
            onSetTranslate={swiper => {
              // The height of the final slide (footer) is adaptive and may appear with a decimal point.
              const val = swiper.snapGrid[swiper.snapGrid.length - 1]
              if (val != null) {
                swiper.snapGrid[swiper.snapGrid.length - 1] = Math.ceil(val)
              }
            }}
          >
            <SlideCKBIntro gameControllerRef={controllerRef} />
            <SlideCKBSecurity gameControllerRef={controllerRef} />
            <SlideCKBFlexibility gameControllerRef={controllerRef} />
            <SlideCKBSustainability gameControllerRef={controllerRef} />
            <SlideCKBModular gameControllerRef={controllerRef} />
            <SlideGetStarted gameControllerRef={controllerRef} isLastSlide />

            <SwiperSlide className={clsx(styles.footer, presets.themeDark)}>
              {renderFooter({ limitMaxWidth: false })}
            </SwiperSlide>
          </Swiper>

          <Transition
            show={showScrollDownTip}
            as={Fragment}
            enter={styles.enter}
            enterFrom={styles.enterFrom}
            enterTo={styles.enterTo}
            leave={styles.leave}
            leaveFrom={styles.leaveFrom}
            leaveTo={styles.leaveTo}
          >
            <div className={styles.scrollTip}>{t('scroll_down')}</div>
          </Transition>

          <div className={styles.golContainer}>
            <ConwayGameOfLife ref={controllerRef} initializationIndicatorRef={initializationIndicatorRef} />
            <div ref={initializationIndicatorRef} className={styles.indicator}></div>
          </div>

          {!isMobile && isOnOperableArea && !hasDrawn && (
            <div className={styles.rightClickTip} style={{ left: mousePos.clientX, top: mousePos.clientY }}>
              + RIGHT CLICK TO DRAW
            </div>
          )}
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
    containerClass?: string
  }
>

const ScreenSlide: FC<ScreenSlideProps> = props => {
  const { children, isLastSlide, gameControllerRef, autoHeight, containerClass, className, ...slideProps } = props

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
      <div className={clsx(styles.container, containerClass)}>
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
        <div className={clsx(styles.descriptionText, DISABLE_CGOL_MOUSE_CONTROLLER)}>{t('text3')}</div>
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
          Unmatched Flexibility and Interoperability.
        </div>
        <div className={clsx(styles.descriptionText, DISABLE_CGOL_MOUSE_CONTROLLER)}>
          Common Knowledge Base is the only blockchain on the market that supports all cryptographic primitives. It can
          seamlessly interoperate with all heterogeneous blockchains and anchor all types of sidechains, state channels,
          and Layer 2 networks. Moreover, it comes with protocol-level account abstraction by default, enabling
          decentralized applications boasting unmatched user experience.
        </div>
      </div>
    </ScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideCKBFlexibility)

const SlideCKBSustainability: FC<ScreenSlideProps> = props => {
  return (
    <ScreenSlide {...props} className={clsx(presets.themeDark, props.className)}>
      <div className={styles.slideCKBSustainability}>
        <div className={clsx(styles.titleText, DISABLE_CGOL_MOUSE_CONTROLLER)}>Inventive Tokenomics.</div>
        <div className={clsx(styles.descriptionText, DISABLE_CGOL_MOUSE_CONTROLLER)}>
          Common Knowledge Base leverages a novel tokenomic model that aligns the interests of all Nervos participants
          and stakeholders. It ensures the miners are paid for providing security in perpetuity, while token holders are
          protected from inflation.
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
          decentralization. Common Knowledge Base offers pristine security, while the Layer 2 networks built on top
          ensure unbounded scalability.
        </div>
      </div>
    </ScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideCKBModular)

const SlideGetStarted: FC<ScreenSlideProps> = props => {
  const isMobile = useIsMobile()

  if (isMobile) {
    // TODO: This is a temporary solution to the problem of not being able to
    // view the full content of this slideshow under mobile.
    // In the future, it is expected that the swiper's freeMode.sticky property
    // will be used to achieve better results, but some hacking may be required.
    return (
      <ScreenSlide autoHeight {...props} className={clsx(presets.themeDark, props.className)}>
        <div className={styles.slideGetStarted}>
          <div className={clsx(styles.titleText, DISABLE_CGOL_MOUSE_CONTROLLER)}>Get Started.</div>
          <div className={styles.cards}>
            <Swiper
              direction="vertical"
              slidesPerView="auto"
              mousewheel={{
                // Supports operations from some Portal to elements outside the swiper container, such as SlideFooter.
                eventsTarget: 'container',
              }}
              nested
              modules={[Mousewheel]}
              // https://stackoverflow.com/questions/53367064/how-to-enable-select-text-in-swiper-js
              simulateTouch={false}
              spaceBetween={10}
              style={{ height: `calc(100vh - 280px)` }}
            >
              <SwiperSlide>
                <Card
                  title="Launch your own Nervos sidechain with Axon."
                  actions={
                    // TODO: need external link
                    // https://github.com/Magickbase/nervos-official-website/issues/4
                    <a href="/" className={styles.link} target="_blank" rel="noreferrer">
                      AXON <ObliqueArrowIcon />
                    </a>
                  }
                >
                  Need high throughput? Build your own custom sidechain and deploy it on Nervos with ease.
                </Card>
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  title="Build on hardware, not software."
                  actions={
                    <Link href="/developers" className={styles.link}>
                      DEVELOPERS <ArrowIcon />
                    </Link>
                  }
                >
                  CKB&apos;s low-level virtual machine allows you to build without limits.
                </Card>
              </SwiperSlide>

              <SwiperSlide>
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
                  Experience protocol-level account abstraction and build dApps that work seamlessly across blockchains.
                </Card>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </ScreenSlide>
    )
  }

  return (
    <ScreenSlide
      autoHeight
      {...props}
      className={clsx(presets.themeDark, props.className)}
      containerClass={styles.slideGetStartedWrapper}
    >
      <div className={styles.slideGetStarted}>
        <div className={clsx(styles.titleText, DISABLE_CGOL_MOUSE_CONTROLLER)}>Get Started.</div>
        <div className={styles.cards}>
          <Card
            title="Launch your own Nervos sidechain with Axon."
            actions={
              // TODO: need external link
              // https://github.com/Magickbase/nervos-official-website/issues/4
              <a href="/" className={styles.link} target="_blank" rel="noreferrer">
                AXON <ObliqueArrowIcon />
              </a>
            }
          >
            Need high throughput? Build your own custom sidechain and deploy it on Nervos with ease.
          </Card>

          <Card
            title="Build on hardware, not software."
            actions={
              <Link href="/developers" className={styles.link}>
                DEVELOPERS <ArrowIcon />
              </Link>
            }
          >
            CKB&apos;s low-level virtual machine allows you to build without limits.
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
            Experience protocol-level account abstraction and build dApps that work seamlessly across blockchains.
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
