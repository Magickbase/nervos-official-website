import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Page } from 'src/components/Page'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { BASE_URL } from 'src/utils'
import { StyledLink } from '../../components/StyledLink'
import { useBodyClass, useIsMobile } from '../../hooks'
import styles from './index.module.scss'
import presets from '../../styles/presets.module.scss'
import { BadgeLeft, BadgeRight, inprogress, upcoming, achievements, journey } from './icons'
import { Section } from './Section'
import { Journey } from './Journey'

const Roadmap: NextPage = () => {
  useBodyClass([presets.themeDark ?? ''])
  const [t, { language }] = useTranslation(['journey', 'common'])
  const { pathname } = useRouter()
  const isMobile = useIsMobile()
  const isDesktop = !isMobile
  const sections = [
    {
      key: 'in_progress',
      title: <div className={clsx(styles.sectionTitle, styles.inProgressTitle)}>{t('in_progress.title')}</div>,
      icon: inprogress,
      iconSize: {
        with: '430px',
        height: '430px',
      },
      iconPosition: 'left' as const,
      subtitle: (
        <StyledLink href="https://github.com/nervosnetwork/ckb/discussions/3827">
          {t('in_progress.subtitle')}
        </StyledLink>
      ),
      descriptionText: t('in_progress.description'),
      descriptionLink: t('in_progress.link'),
      projects: [
        { label: t('in_progress.ckb_auth'), url: 'https://github.com/nervosnetwork/ckb-auth' },
        {
          label: t('in_progress.perun_channel'),
          url: 'https://medium.com/perunnetwork/perun-channels-coming-to-nervos-ckb-1d72081ee887',
        },
        {
          label: t('in_progress.spore_nft'),
          url: 'https://www.spore.pro',
        },
        { label: t('in_progress.kuai'), url: 'https://github.com/ckb-js/kuai/' },
        {
          label: t('in_progress.open_transactions'),
          url: 'https://talk.nervos.org/t/exploring-the-ckb-otx-paradigm-accomplishments-and-insights-from-building-a-transaction-streaming-prototype/7346',
        },
      ],
    },
    {
      key: 'upcoming',
      title: <div className={clsx(styles.sectionTitle, styles.upcomingTitle)}>{t('upcoming.title')}</div>,
      icon: upcoming,
      iconSize: {
        with: '480px',
        height: '476.24px',
      },
      iconPosition: 'right' as const,
      subtitle: (
        <StyledLink href="https://github.com/nervosnetwork/ckb/discussions/3827">{t('upcoming.subtitle')}</StyledLink>
      ),
      descriptionText: t('upcoming.description'),
      descriptionLink: t('upcoming.link'),
      projects: [{ label: t('upcoming.light_client'), url: 'https://github.com/nervosnetwork/ckb/issues/4085' }],
    },
    {
      key: 'achievements',
      title: <div className={clsx(styles.sectionTitle, styles.achievementsTitle)}>{t('achievements.title')}</div>,
      icon: achievements,
      iconSize: {
        with: '480px',
        height: '456.98px',
      },
      iconPosition: 'left' as const,
      subtitle: null,
      descriptionText: t('achievements.description'),
      descriptionLink: t('achievements.link'),
      projects: [
        { label: t('achievements.axon_beta_release'), url: 'https://x.com/AxonWeb3/status/1663898512281735169?s=20' },
        {
          label: t('achievements.light_client_testnet_activation'),
          url: 'https://twitter.com/busyforking/status/1609169117097127937',
        },
        {
          label: t('achievements.quantum_resistant_sphincs'),
          url: 'https://github.com/cryptape/quantum-resistant-lock-script',
        },
        {
          label: t('achievements.joyid_testnet'),
          url: 'https://archive.nervos.org/blog/joyid-a-passwordless-web3-wallet-that-will-accelerate-the-mass-adoption-for-nervos',
        },
        {
          label: t('achievements.mirana_hardfork'),
          url: 'https://archive.nervos.org/blog/nervos-layer-1-a-major-protocol-upgrade-is-rolling-out',
        },
        {
          label: t('achievements.godwoken_v1_ethereum_equivalence'),
          url: 'https://archive.nervos.org/blog/nervos-network-godwoken-announcement',
        },
        {
          label: t('achievements.taproot_on_ckb'),
          url: 'https://blog.cryptape.com/enable-bitcoin-taproot-on-ckb-part-ii',
        },
        {
          label: t('achievements.lua_on_ckb'),
          url: 'https://blog.cryptape.com/enhancing-ergonomics-and-extensibility-of-ckb-contract-development-with-lua',
        },
        {
          label: t('achievements.xudt'),
          url: 'https://blog.cryptape.com/enhance-sudts-programmability-with-xudt',
        },
        { label: t('achievements.bit_launches'), url: 'https://twitter.com/NervosNetwork/status/1416051952908124161' },
        { label: t('achievements.cota'), url: 'https://token.city/login' },
        {
          label: t('achievements.godwoken_launches'),
          url: 'https://archive.nervos.org/blog/nervos-launches-godwoken-mainnet-beta',
        },
        { label: t('achievements.sudt'), url: 'https://decrypt.co/48538/nervos-network-sudt-ethereum-token-erc-20/' },
        {
          label: t('achievements.opera_integration'),
          url: 'https://press.opera.com/2022/02/22/opera-nervos-blockchain-ckb/',
        },
        { label: t('achievements.force_bridge_launch'), url: 'https://archive.nervos.org/blog/force-bridge-mainnet' },
      ],
    },
  ]

  const journeySectionData = {
    title: <div className={clsx(styles.sectionTitle)}>{t('journey.title')}</div>,
    icon: journey,
    iconPosition: 'right' as const,
    description: t('journey.description'),
    // TODO: add join button href here
    joinLink: 'https://discord.gg/FKh8Zzvwqa',
    joinLinkText: t('journey.link_text'),
  }

  const pageTitle = 'Nervos Network | Journey'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Page
        className={styles.baseSeparatePage}
        openGraph={props => ({
          ...props,
          type: 'website',
          title: t('title'),
          description: `${t('subtitle.never_finished')}, ${t('subtitle.always_building')}`,
          url: `${BASE_URL}/${language}${pathname}`,
          site_name: pageTitle,
          image: {
            alt: 'coverImage',
            url: `${BASE_URL}/images/topics/Journey.png`,
          },
        })}
      >
        <div className={styles.content}>
          {isDesktop && (
            <>
              <div className={clsx(styles.embellishedElements, styles.embellishedElementLeft)} />
              <div className={clsx(styles.embellishedElements, styles.embellishedElementRight)} />
            </>
          )}
          {isMobile && (
            <>
              <div className={clsx(styles.embellishedElements, styles.embellishedElementMobileUp)} />
              <div className={clsx(styles.embellishedElements, styles.embellishedElementMobileDown)} />
            </>
          )}
          <div>
            <div className={styles.title}>{t('title')}</div>
            <div className={styles.subTitleWrapper}>
              <div className={styles.subTitleItem}>{t('subtitle.never_finished')},</div>
              <div className={styles.subTitleItem}>{t('subtitle.always_building')}</div>
            </div>
          </div>

          <div className={styles.badges}>
            <div className={styles.badgeLeft}>
              <BadgeLeft />
            </div>
            <div className={styles.badgeRight}>
              <BadgeRight />
            </div>
          </div>

          <div className={styles.slogan}>
            <div className={styles.sloganTitle}>{t('get_involved.title')}</div>
            <div className={styles.sloganText}>{t('get_involved.description_1')}</div>
            <div className={styles.sloganText}>{t('get_involved.description_2')}</div>
            {/* // TODO: add join button href here */}
            <StyledLink className={styles.link} href="https://github.com/nervosnetwork/rfcs/" colored>
              {t('get_involved.rfcs')}
            </StyledLink>{' '}
            | {/* // TODO: add join button href here */}
            <StyledLink className={styles.link} href="https://talk.nervos.org" colored>
              {t('get_involved.nervos_talk_forum')}
            </StyledLink>
          </div>
          {sections.map((section, index) => {
            return (
              <Section
                {...section}
                key={section.key}
                className={clsx({
                  // when on desktop, background color for the second section is different
                  [styles.darkerBg ?? '']: isDesktop && index === 1,
                })}
              />
            )
          })}
          <Journey
            title={journeySectionData.title}
            icon={journeySectionData.icon}
            iconPosition={journeySectionData.iconPosition}
            description={journeySectionData.description}
            joinLink={journeySectionData.joinLink}
            joinLinkText={journeySectionData.joinLinkText}
          />
        </div>
      </Page>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  const lng = await serverSideTranslations(locale, ['common', 'journey'])
  return {
    props: lng,
  }
}

export default Roadmap
