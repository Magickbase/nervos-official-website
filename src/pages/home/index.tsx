import { type NextPage } from 'next'
import { Swiper, SwiperSlide, SwiperSlideProps } from 'swiper/react'
import { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Page } from '../../components/Page'
import styles from './index.module.scss'
import presets from '../../styles/presets.module.scss'
import { SlideFooter } from './SlideFooter'

const Home: NextPage = () => {
  return (
    <Page>
      {({ renderHeader, renderFooter }) => (
        <>
          <div className={styles.blendModeHeader}>{renderHeader()}</div>
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
            <SlideCKBIntro />
            <SlideCKBSecurity />
            {/* TODO: Need to implement other slides */}
            <SwiperSlide className={clsx(styles.footer, presets.themeNight)}>{renderFooter()}</SwiperSlide>
          </Swiper>
        </>
      )}
    </Page>
  )
}

const FullScreenSlide: FC<PropsWithChildren<SwiperSlideProps & { isFirstSlide?: boolean }>> = props => {
  const { children, isFirstSlide, className, ...slideProps } = props
  return (
    <SwiperSlide className={clsx(styles.fullScreenSlide, className)} {...slideProps}>
      <div className={styles.container}>
        <div className={styles.headerMixLayer} />
        <div className={styles.content}>{children}</div>
        <SlideFooter isFirstSlide={isFirstSlide} />
      </div>
    </SwiperSlide>
  )
}
allowCustomDescendantOfSwiper(FullScreenSlide)

const SlideCKBIntro: FC = () => {
  return (
    <FullScreenSlide isFirstSlide>
      <div className={styles.slideCKBIntro}>
        <div className={styles.text1}>Common Knowledge Base.</div>
        <div className={styles.text2}>Layer 1 Built for Modularity.</div>
        <div className={styles.text3}>
          <span className={styles.bold}>Nervos</span> is a modular blockchain network built from the ground up to ensure
          outstanding security, decentralization, flexibility, and interoperability on the base layer and unbounded
          scalability on the upper layers.
        </div>
        <div className={styles.text4}>
          Built on RISC-V and secured by Proof-of-Work, CKB is the most flexible and interoperable Layer 1 in the
          blockchain industry.
        </div>
      </div>
    </FullScreenSlide>
  )
}
allowCustomDescendantOfSwiper(SlideCKBIntro)

const SlideCKBSecurity: FC = () => {
  return (
    <FullScreenSlide className={presets.themeNight}>
      <div className={styles.slideCKBSecurity}>
        <div className={styles.text1}>Supreme Security and Decentralization.</div>
        <div className={styles.text2}>
          CKB is among the few smart contract platforms that leverage the battle-tested Proof-of-Work consensus
          algorithm to ensure exceptional security and decentralization under all circumstances. It is truly
          decentralized, permissionless, and uniquely resistant to capture by hostile actors.
        </div>
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

export default Home
