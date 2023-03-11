import { FC, PropsWithChildren } from 'react'
import { GetServerSideProps, type NextPage } from 'next'
import clsx from 'clsx'
import { Swiper, SwiperSlide, SwiperSlideProps } from 'swiper/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
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
  return (
    <Page>
      {({ renderHeader, renderFooter }) => (
        <>
          <div className={clsx(styles.blendModeHeader, presets.themeDark)}>{renderHeader()}</div>
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
            <SwiperSlide className={clsx(styles.footer, presets.themeLight)}>{renderFooter()}</SwiperSlide>
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
  const { t } = useTranslation('home', { keyPrefix: 'slide_ckb_intro' })

  return (
    <FullScreenSlide isFirstSlide>
      <div className={styles.slideCKBIntro}>
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

const SlideCKBSecurity: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'slide_ckb_security' })

  return (
    <FullScreenSlide className={presets.themeDark}>
      <div className={styles.slideCKBSecurity}>
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

export default Home
