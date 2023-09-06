import type { GetStaticProps, NextPage } from 'next'
import { Page } from 'src/components/Page'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { StyledLink } from '../../components/StyledLink'
import { useBodyClass, useIsMobile } from '../../hooks'
import styles from './index.module.scss'
import presets from '../../styles/presets.module.scss'
import { BadgeLeft, BadgeRight, inprogress, upcoming, achievements, journey } from './icons'
import { Section } from './Section'
import { Journey } from './Journey'

const Roadmap: NextPage = () => {
  useBodyClass([presets.themeDark ?? ''])
  const [t] = useTranslation(['roadmap', 'common'])
  const isMobile = useIsMobile()
  const isDesktop = !isMobile
  const sections = [
    {
      title: <div className={clsx(styles.sectionTitle, styles.inProgressTitle)}>{t('in_progress.title')}</div>,
      icon: inprogress,
      iconSize: {
        with: '430px',
        height: '430px',
      },
      iconPosition: 'left' as const,
      subtitle: t('in_progress.subtitle'),
      descriptionText: t('in_progress.description'),
      descriptionLink: t('in_progress.link'),
      projects: [
        { label: t('in_progress.kuai'), url: '/' },
        { label: t('in_progress.force_relay'), url: '/' },
        { label: t('in_progress.open_transactions'), url: '/' },
        { label: t('in_progress.composable_lock_script'), url: '/' },
        { label: t('in_progress.ckb_light_client'), url: '/' },
      ],
    },
    {
      title: <div className={clsx(styles.sectionTitle, styles.upcomingTitle)}>{t('upcoming.title')}</div>,
      icon: upcoming,
      iconSize: {
        with: '480px',
        height: '476.24px',
      },
      iconPosition: 'right' as const,
      subtitle: t('upcoming.subtitle'),
      descriptionText: t('upcoming.description'),
      descriptionLink: t('upcoming.link'),
      projects: [{ label: t('upcoming.light_client'), url: '/' }],
    },
    {
      title: <div className={clsx(styles.sectionTitle, styles.achievementsTitle)}>{t('achievements.title')}</div>,
      icon: achievements,
      iconSize: {
        with: '480px',
        height: '456.98px',
      },
      iconPosition: 'left' as const,
      subtitle: t('achievements.description'),
      descriptionText: t('achievements.description'),
      descriptionLink: t('achievements.link'),
      projects: [
        { label: t('achievements.cota'), url: '/' },
        { label: t('achievements.light_client_soft_fork'), url: '/' },
        { label: t('achievements.light_client_implementation'), url: '/' },
        { label: t('achievements.neuron'), url: '/' },
        { label: t('achievements.axon_beta'), url: '/' },
        { label: t('achievements.godwoken_launches'), url: '/' },
        { label: t('achievements.godwoken_v1_ethereum_equivalence'), url: '/' },
        { label: t('achievements.joyid_testnet'), url: '/' },
        { label: t('achievements.bit_launches'), url: '/' },
        { label: t('achievements.force_bridge_launch'), url: '/' },
        { label: t('achievements.opera_integration'), url: '/' },
      ],
    },
  ]

  const journeySectionData = {
    title: <div className={clsx(styles.sectionTitle)}>{t('journey.title')}</div>,
    icon: journey,
    iconPosition: 'right' as const,
    description: t('journey.description'),
    // TODO: add join button href here
    joinLink: '',
    joinLinkText: t('journey.link_text'),
  }

  return (
    <>
      <Page className={styles.baseSeparatePage}>
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
            <StyledLink className={styles.link} href={''} colored>
              {t('get_involved.rfcs')}
            </StyledLink>{' '}
            | {/* // TODO: add join button href here */}
            <StyledLink className={styles.link} href={''} colored>
              {t('get_involved.nervos_talk_forum')}
            </StyledLink>
          </div>
          {sections.map((section, index) => {
            return (
              <Section
                key={section.subtitle}
                {...section}
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
  const lng = await serverSideTranslations(locale, ['common', 'roadmap'])
  return {
    props: lng,
  }
}

export default Roadmap
