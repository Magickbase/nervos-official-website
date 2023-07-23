import type { NextPage } from 'next'
import { Page } from 'src/components/Page'
import clsx from 'clsx'
import { StyledLink } from '../../components/StyledLink'
import { useBodyClass } from '../../hooks'

import styles from './index.module.scss'
import presets from '../../styles/presets.module.scss'

import { Badges, inprogress, upcoming, achievements } from './icons'
import { Section } from './Section'

const Roadmap: NextPage = () => {
  useBodyClass([presets.themeDark ?? ''])
  const sections = [
    {
      title: <div className={clsx(styles.sectionTitle, styles.inProgressTitle)}>In Progress</div>,
      icon: inprogress,
      iconPosition: 'left' as const,
      subtitle: 'CKB Hardfork 2023',
      descriptionText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua. Find out more`,
      descriptionLink: 'Find out more',
      projects: ['Kuai', 'Force Relay', 'Open Transactions', 'Composable Lock Script', 'CKB Light Client'],
    },
    {
      title: <div className={clsx(styles.sectionTitle, styles.upcomingTitle)}>Upcoming</div>,
      icon: upcoming,
      iconPosition: 'right' as const,
      subtitle: '2023 Hardtork',
      descriptionText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua. Find out more`,
      descriptionLink: 'Find out more',
      projects: ['Light client soft fork'],
    },
    {
      title: <div className={clsx(styles.sectionTitle, styles.achievementsTitle)}>Achievements</div>,
      icon: achievements,
      iconPosition: 'left' as const,
      subtitle: 'SUDT',
      descriptionText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua. Find out more`,
      descriptionLink: 'Find out more',
      projects: [
        'Token.citv (CoTA)',
        'Light client soft fork',
        'Light client implementation',
        'Neuron',
        'Axon beta',
        'Godwoken Launches',
        'Godwoken v1 Ethereum Equivalence',
        'JoyID testnet',
        '.bit launches',
        'Force bridge launch',
        'Opera integration',
      ],
    },
  ]

  return (
    <>
      <Page className={styles.baseSeparatePage}>
        <div className={styles.embellishedElements} />
        <div className={styles.content}>
          <div className={styles.title}>The journey</div>
          <div className={styles.subTitleWrapper}>
            <div className={styles.subTitleItem}>NEVER FINISHED,</div>
            <div className={styles.subTitleItem}>ALWAYS BUILDING</div>
          </div>

          <div className={styles.badges}>
            <Badges />
          </div>
          <div className={styles.slogan}>
            <div className={styles.sloganTitle}>Get involved</div>
            <div className={styles.sloganText}>
              Nervos is an open source project to build the primitives necessary for a robust, permissionless digital
              economy. The path to realize this ambition is windy, full of quiet triumps and surprising turns.
            </div>
            <div className={styles.sloganText}>
              Above all, Nervos is a community-driven endeavor, and anything that is accomplished is done through a
              galvanized genuine interest in the brilliant minds that contribute to the network&apos;s development.
            </div>
            <StyledLink href={''} colored>
              RFCs
            </StyledLink>{' '}
            |{' '}
            <StyledLink href={''} colored>
              Neuron Talk Forum
            </StyledLink>
          </div>
          {sections.map(section => (
            <Section key={section.subtitle} {...section} />
          ))}
        </div>
      </Page>
    </>
  )
}

export default Roadmap
