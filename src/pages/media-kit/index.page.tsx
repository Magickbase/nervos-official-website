import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Page } from '../../components/Page'
import { StyledLink } from '../../components/StyledLink'
import EmbellishedLeft from './embellished/left.svg'
import EmbellishedRight from './embellished/right.svg'
import renderings from './renderings'
import styles from './index.module.scss'

const LightDark: Readonly<['light', 'dark']> = ['light', 'dark']

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
          {LightDark.map(type => (
            <Image
              key={type}
              alt={`${type}-logo`}
              src={renderings.logo[type]}
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
          {LightDark.map(type => (
            <Image
              key={type}
              alt={`${type}-symbol`}
              src={renderings.symbol[type]}
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
          {LightDark.map(type => (
            <Image
              key={type}
              alt={`${type}-wordmark`}
              src={renderings.wordmark[type]}
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
          {LightDark.map(type => (
            <Image
              key={type}
              alt={`${type}-primary-color`}
              src={renderings.primaryColors[type]}
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
          {(['grey', 'colors'] as const).map(type => (
            <Image
              key={type}
              alt={`${type}-secondary-color`}
              src={renderings.secondaryColors[type]}
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
      assets: <img alt="typography" src={renderings.typography.articulatCF.toString()} loading="lazy" width="630" />,
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
          {(['dark', 'light'] as const).map(type => (
            <Image
              key={type}
              alt={`${type}-cell-model`}
              src={renderings.cellModel[type]}
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
        link: '/assets/media-kit/Nervos Merch Assets.zip',
      },
      link: {
        label: t('merchAssets.link'),
        link: '/',
      },
      assets: (
        <div className={styles.merchAssets}>
          {Array.from({ length: 8 }).map((_, idx) => (
            <Image
              key={idx}
              alt={`merch-${idx}`}
              // src={`/images/media-kit/merch-assets/${idx}.png`}
              src={renderings.merchAssets[idx] as any}
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
