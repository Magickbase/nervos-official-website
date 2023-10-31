import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Page } from '../../components/Page'
import { StyledLink } from '../../components/StyledLink'
import EmbellishedLeft from './embellished/left.svg'
import EmbellishedRight from './embellished/right.svg'
import styles from './index.module.scss'

const MediaKit: NextPage = () => {
  const { t } = useTranslation(['media-kit', 'common'])

  const sections: Array<{
    title: string
    description: string
    download?: Record<'label' | 'link', string>
    link?: Record<'label' | 'link', string>
    assets: React.ReactElement
  }> = [
    {
      title: t('logo.title'),
      description: t('logo.description'),
      download: {
        label: t('logo.download'),
        link: '/assets/media-kit/Nervos Logo.zip',
      },
      assets: (
        <div>
          {['light', 'dark'].map(type => (
            <Image
              key={type}
              alt={`${type}-logo`}
              src={`/images/media-kit/logo/${type}.png`}
              loading="lazy"
              width="300"
              height="300"
            />
          ))}
        </div>
      ),
    },
    {
      title: t('symbol.title'),
      description: t('symbol.description'),
      download: {
        label: t('symbol.download'),
        link: '/assets/media-kit/Nervos Token Assets.zip',
      },
      assets: (
        <div>
          {['light', 'dark'].map(type => (
            <Image
              key={type}
              alt={`${type}-symbol`}
              src={`/images/media-kit/symbol/${type}.png`}
              loading="lazy"
              width="300"
              height="300"
            />
          ))}
        </div>
      ),
    },
    {
      title: t('wordmark.title'),
      description: t('wordmark.description'),
      download: {
        label: t('wordmark.download'),
        link: '/assets/media-kit/Nervos Wordmark.zip',
      },
      assets: (
        <div>
          {['light', 'dark'].map(type => (
            <Image
              key={type}
              alt={`${type}-wordmark`}
              src={`/images/media-kit/wordmark/${type}.png`}
              loading="lazy"
              width="300"
              height="300"
            />
          ))}
        </div>
      ),
    },
    {
      title: t('primaryColors.title'),
      description: t('primaryColors.description'),
      assets: (
        <div>
          {['light', 'dark'].map(type => (
            <Image
              key={type}
              alt={`${type}-primary-color`}
              src={`/images/media-kit/primary-colors/${type}.png`}
              loading="lazy"
              width="300"
              height="300"
            />
          ))}
        </div>
      ),
    },
    {
      title: t('secondaryColors.title'),
      description: t('secondaryColors.description'),
      download: {
        label: t('secondaryColors.download'),
        link: '/assets/media-kit/Nervos Color.zip',
      },
      assets: (
        <div className={styles.vertical}>
          {['grey', 'colors'].map(type => (
            <Image
              key={type}
              alt={`${type}-secondary-color`}
              src={`/images/media-kit/secondary-colors/${type}.png`}
              loading="lazy"
              width="630"
              height="236"
            />
          ))}
        </div>
      ),
    },
    {
      title: t('typography.title'),
      description: t('typography.description'),
      assets: (
        <Image
          alt="typography"
          src={`/images/media-kit/typography/articulat_cf.png`}
          loading="lazy"
          layout="responsive"
          width="630"
          height="402"
        />
      ),
    },
    {
      title: t('cellModel.title'),
      description: t('cellModel.description'),
      link: {
        label: t('cellModel.link'),
        link: 'https://copy.sh/life/',
      },
      assets: (
        <div className={styles.vertical}>
          {['dark', 'light'].map(type => (
            <Image
              key={type}
              alt={`${type}-cell-model`}
              src={`/images/media-kit/cell-model/${type}.png`}
              loading="lazy"
              width="630"
              height="327"
            />
          ))}
        </div>
      ),
    },
    {
      title: t('merchAssets.title'),
      description: t('merchAssets.description'),
      download: {
        label: t('merchAssets.download'),
        link: 'https://drive.google.com/drive/folders/1ZSnT39fv1OoZ9ABUfDxt9SayQ2AEes22',
      },
      link: {
        label: t('merchAssets.link'),
        link: 'https://w3w.ai/main/nervosnetwork',
      },
      assets: (
        <div className={styles.merchAssets}>
          {Array.from({ length: 2 }).map((_, idx) => (
            <Image
              key={idx}
              alt={`merch-${idx}`}
              src={`/images/media-kit/merch-assets/${idx}.png`}
              loading="lazy"
              width="300"
              height="300"
            />
          ))}
        </div>
      ),
    },
  ]

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <Page>
        <div className={styles.container}>
          <EmbellishedLeft className={styles.embellished} data-position="left" />
          <EmbellishedRight className={styles.embellished} data-position="right" />
          <section className={styles.banner}>
            <h1>{t('banner')}</h1>
            <h2>{t('slogan')}</h2>
          </section>

          <section className={styles.description}>{t('description')}</section>
          {sections.map(({ title, description, download, link, assets }) => (
            <section key={title} className={styles.section}>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
                {download ? (
                  <StyledLink
                    href={encodeURI(download.link)}
                    colored
                    underline
                    download={download.link.split('/').find(seg => seg.endsWith('.zip'))}
                  >
                    {download.label}
                  </StyledLink>
                ) : null}

                {link ? (
                  <StyledLink href={link.link} colored underline>
                    {link.label}
                  </StyledLink>
                ) : null}
              </div>
              <div className={styles.assets}>{assets}</div>
            </section>
          ))}
        </div>
      </Page>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  const lng = await serverSideTranslations(locale, ['common', 'media-kit'])
  return {
    props: lng,
  }
}

export default MediaKit
