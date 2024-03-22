import { FC, PropsWithChildren, ReactNode } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import clsx from 'clsx'
import Head from 'next/head'
import { isSafari, isIOS } from 'react-device-detect'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { LanguagePopover } from 'src/components/Header'
import { Footer } from './FoundationFooter'
import {
  NervosLogoIcon,
  NervosDocsIcon,
  ArrowRightIcon,
  DeveloperTrainingCourseIcon,
  NervosDaoIcon,
  CkbEcosystemFundIcon,
  RfcsIcon,
  ForumIcon,
  XIcon,
  FoundationLogo,
  // ImgFoundationLogo,
  ImgInfrastructure,
  ImgGuidance,
  ImgCommunity,
  ImgCellsBg,
  ImgAnOpenBazaar,
  ImgExplorationAndInnovation,
  ImgNurtureAndSupport,
  JoyidIcon,
  KhalaniIcon,
  DIDIcon,
  CryptapeIcon,
  CellstudioIcon,
  MagickbaseIcon,
  NervapeIcon,
  OmigaIcon,
  SporeIcon,
} from './icons'
import styles from './index.module.scss'

const TEAMS: {
  key: string
  icon: ReactNode
  link: string
}[] = [
  { icon: <CryptapeIcon />, key: 'Cryptape', link: 'https://cryptape.com/' },
  { icon: <JoyidIcon />, key: 'Joyid', link: 'https://joy.id/' },
  { icon: <DIDIcon />, key: 'DID', link: 'https://d.id/' },
  { icon: <NervapeIcon />, key: 'Nervape', link: 'https://www.nervape.com/' },
  { icon: <CellstudioIcon />, key: 'Cellstudio', link: 'https://cell.studio/' },
  { icon: <OmigaIcon />, key: 'Omiga', link: 'https://omiga.io/' },
  { icon: <KhalaniIcon />, key: 'Khalani', link: 'https://khalani.network/' },
  { icon: <SporeIcon />, key: 'Spore', link: 'https://spore.pro/' },
  { icon: <MagickbaseIcon />, key: 'Magickbase', link: 'https://magickbase.com/' },
]

const Emphasis: FC<PropsWithChildren> = ({ children }) => <strong className={styles.emphasis}>{children}</strong>
const Strong: FC<PropsWithChildren> = ({ children }) => <strong>{children}</strong>

const Foundation: NextPage = () => {
  const [t, { language }] = useTranslation(['foundation', 'common'])
  const [commonT] = useTranslation('common', { keyPrefix: 'category' })

  const pageTitle = 'Nervos Network | Foundation'

  const resources: {
    title: string
    description: string
    icon: ReactNode
    link: string
  }[] = [
    {
      title: t('resource_for_participants.nervos_docs.title'),
      description: t('resource_for_participants.nervos_docs.description'),
      link: 'https://docs.nervos.org/',
      icon: <NervosDocsIcon />,
    },
    {
      title: t('resource_for_participants.developer_training_course.title'),
      description: t('resource_for_participants.developer_training_course.description'),
      link: 'https://nervos.gitbook.io/developer-training-course/',
      icon: <DeveloperTrainingCourseIcon />,
    },
    {
      title: t('resource_for_participants.nervos_dao.title'),
      description: t('resource_for_participants.nervos_dao.description'),
      link: 'https://medium.com/nervosnetwork/nervos-dao-explained-95e33898b1c/',
      icon: <NervosDaoIcon />,
    },
    {
      title: t('resource_for_participants.ecosystem_fund.title'),
      description: t('resource_for_participants.ecosystem_fund.description'),
      link: 'https://ckbeco.fund/',
      icon: <CkbEcosystemFundIcon />,
    },
    {
      title: t('resource_for_participants.rfcs.title'),
      description: t('resource_for_participants.rfcs.description'),
      link: 'https://github.com/nervosnetwork/rfcs/',
      icon: <RfcsIcon />,
    },
    {
      title: t('resource_for_participants.forum.title'),
      description: t('resource_for_participants.forum.description'),
      link: 'https://talk.nervos.org/',
      icon: <ForumIcon />,
    },
  ]

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.foundationPageHeader}>
        <div style={{ padding: 12, height: '100%' }}>
          <FoundationLogo style={{ height: '100%' }} />
        </div>

        <div style={{ marginLeft: 'auto' }} />
        <div className={styles.headerMenu} style={{ marginRight: 60 }}>
          <Link href="#positioning">{t('menu.positioning')}</Link>
          <Link href="#vision">{t('menu.vision')}</Link>
          <Link href="#resources">{t('menu.resources')}</Link>
          <Link href="#teams">{t('menu.teams')}</Link>
        </div>

        <Link href="https://twitter.com/RunningCKB" target="_blank" style={{ marginRight: 20 }}>
          <XIcon />
        </Link>

        <LanguagePopover
          languages={[
            { name: 'English', localeName: 'en' },
            { name: '中文', englishName: 'Chinese', localeName: 'zh' },
            { name: '한국어', englishName: 'Korean', localeName: 'ko', disabled: true },
            { name: 'Español', englishName: 'Spanish', localeName: 'es' },
          ]}
        />
      </div>
      {(isSafari || isIOS) && <div className={styles.headerShadow} />}
      <div className={styles.container}>
        <div className={styles.banner} style={{ marginBottom: 80, marginTop: 32 }}>
          <NervosLogoIcon className={styles.foundationLogo} />
          <div className={styles.foundationTitle}>{t('foundation')}</div>
          <div className={styles.foundationDescription}>
            <Trans
              t={t}
              i18nKey="slogan"
              components={{
                tag1: <Emphasis />,
                tag2: <Strong />,
              }}
            />
          </div>
          <div
            className={clsx(styles.bannerBg, styles.bannerBgLeft)}
            style={{ backgroundImage: `url(${ImgCellsBg.src})` }}
          />
          <div
            className={clsx(styles.bannerBg, styles.bannerBgRight)}
            style={{ backgroundImage: `url(${ImgCellsBg.src})` }}
          />
        </div>

        <div id="positioning" className={styles.highlightTitle} style={{ marginBottom: 32 }}>
          {t('positioning.title')}
        </div>

        <div className={styles.positioning} style={{ marginBottom: 80 }}>
          <div className={styles.positioningCard}>
            <div className={styles.positioningCardCover}>
              <img src={ImgInfrastructure.src} className={styles.illustration} />
            </div>
            <div className={styles.positioningCardContent}>
              <div className={styles.positioningCardTitle}>{t('positioning.infrastructure.title')}</div>
              <div className={styles.positioningCardDescription}>{t('positioning.infrastructure.description')}</div>
            </div>
          </div>
          <div className={clsx(styles.positioningCard, styles.reverse)}>
            <div className={styles.positioningCardCover}>
              <img src={ImgGuidance.src} className={styles.illustration} />
            </div>
            <div className={styles.positioningCardContent}>
              <div className={styles.positioningCardTitle}>{t('positioning.guidance.title')}</div>
              <div className={styles.positioningCardDescription}>{t('positioning.guidance.description')}</div>
            </div>
          </div>
          <div className={styles.positioningCard}>
            <div className={styles.positioningCardCover}>
              <img src={ImgCommunity.src} className={styles.illustration} />
            </div>
            <div className={styles.positioningCardContent}>
              <div className={styles.positioningCardTitle}>{t('positioning.community.title')}</div>
              <div className={styles.positioningCardDescription}>{t('positioning.community.description')}</div>
            </div>
          </div>
        </div>

        <div className={styles.visionTitle} style={{ marginBottom: 20 }}>
          <div className={styles.titleText}>{t('vision_for_future.title')}</div>
        </div>

        <div id="vision" className={styles.vision} style={{ marginBottom: 80 }}>
          <div className={styles.visionCard}>
            <div className={styles.visionCardCover}>
              <img src={ImgAnOpenBazaar.src} className={styles.illustration} />
            </div>
            <div className={styles.visionCardContent}>
              <div className={styles.visionCardTitle}>{t('vision_for_future.an_open_bazaar.title')}</div>
              <div className={styles.visionCardTags}>
                <span>{commonT('bottom-up approach')}</span>
                <span>{commonT('bazaar')}</span>
              </div>
              <div className={styles.visionCardDescription}>
                {t('vision_for_future.an_open_bazaar.description.text1')}
              </div>
            </div>
          </div>

          <div className={styles.visionCard}>
            <div className={styles.visionCardCover}>
              <img src={ImgExplorationAndInnovation.src} className={styles.illustration} />
            </div>
            <div className={styles.visionCardContent}>
              <div className={styles.visionCardTitle}>{t('vision_for_future.exploration_and_innovation.title')}</div>
              <div className={styles.visionCardTags}>
                <span>{commonT('new ideas')}</span>
                <span>{commonT('grow')}</span>
              </div>
              <div className={styles.visionCardDescription}>
                {t('vision_for_future.exploration_and_innovation.description')}
              </div>
            </div>
          </div>

          <div className={styles.visionCard}>
            <div className={styles.visionCardCover}>
              <img src={ImgNurtureAndSupport.src} className={styles.illustration} />
            </div>
            <div className={styles.visionCardContent}>
              <div className={styles.visionCardTitle}>{t('vision_for_future.nurture_and_support.title')}</div>
              <div className={styles.visionCardTags}>
                <span>{commonT('support')}</span>
                <span>{commonT('guidance')}</span>
              </div>
              <div className={styles.visionCardDescription}>
                {t('vision_for_future.nurture_and_support.description')}
              </div>
            </div>
          </div>
        </div>

        <div id="resources" className={styles.highlightTitle} style={{ marginBottom: 32 }}>
          {t('resource_for_participants.title')}
        </div>

        <div className={styles.resources} style={{ marginBottom: 80 }}>
          {resources.map(r => (
            <div className={styles.resourceCard} key={r.title}>
              {r.icon}
              <Link href={r.link} target="_blank">
                <div className={styles.resourceCardTitle}>{r.title}</div>
              </Link>
              <div>{r.description}</div>
              <Link className={styles.resourceCardLink} href={r.link} target="_blank">
                {r.title}
                <ArrowRightIcon />
              </Link>
            </div>
          ))}
        </div>

        <div id="teams" className={styles.highlightTitle} style={{ marginBottom: 32 }}>
          {t('team.title')}
        </div>

        <div className={styles.teamCard} style={{ marginBottom: 100 }}>
          <div className={styles.teams}>
            {TEAMS.map(team => (
              <Link key={team.key} href={team.link} target="_blank">
                {team.icon}
              </Link>
            ))}
          </div>
          <div className={styles.teamCardContent}>
            <div className={styles.teamCardTitle}>{t('team.friends')}</div>
            <div className={styles.tags}>
              <span className={styles.tag}>{commonT('people of nervos')}</span>
              <span className={styles.tag}>{commonT('ecosystem')}</span>
            </div>
            <div className={styles.teamCardDescription}>{t('team.description.text1')}</div>
            <a href="https://jobs.gohire.io/nervos-foundation-tzqhh93f/" target="_blank">
              {t('team.see')}
            </a>
          </div>
        </div>

        <Footer className={styles.foundationFooter} style={{ marginBottom: 100 }} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  const lng = await serverSideTranslations(locale, ['common', 'foundation'])
  return {
    props: {
      ...lng,
    },
  }
}

export default Foundation
