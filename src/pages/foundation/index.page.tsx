import { type NextPage } from 'next'
import clsx from 'clsx'
import { useIsMobile } from 'src/hooks'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { Page } from 'src/components/Page'
import { StyledLink } from 'src/components/StyledLink'

import presets from 'src/styles/presets.module.scss'
import styles from './index.module.scss'

import { FoundationFloatIconGroup, FoundationMobileFloatIconGroup, LadderIcon } from './icons'

const title = <div>The Nervos Foundation.</div>
const description = `The Nervos Foundation is a non-profit organization whose mission is to support the long-term growth of the Nervos Network. We work to ensure the future success of Nervos by seeding the community to grow independently while driving meaningful innovation in the industry.`
const editor = { id: '@neon.bit' }
const positionsData = {
  positionsTitle: 'Foundation Positioning.',
  positions: [
    {
      itemTitle: 'Infrastructure',
      itemContent:
        'We’re taking the initial steps to realize the ambitions of the Nervos Network, and this means putting resources in research, development and maintenance of the foundational tech stack. ',
    },
    {
      itemTitle: 'Guidance',
      itemContent:
        'The foundation is made up of veterans of blockchain and open source technology. We provide guidance to participants so they can be self-sufficient and sustain technological growth beyond the initial phases of development.',
    },
    {
      itemTitle: 'Community',
      itemContent:
        'We provide the resources to bootstrap the community and support its growth into a decentralized entity, with no central power structure.',
    },
  ],
}

const extensionTitleFunctions = [
  {
    title: 'An Open Bazaar.',
    tags: ['BOTTOM-UP APPROACH', 'BAZAAR'],
    content: (
      <>
        We see the Nervos Network as an open bazaar. Anyone can come by and participate in the network at any level. In
        a bazaar-style open market, all types of participants are welcome: no matter if you’re a builder, contributor or
        just an observer.
        <div className="oneLineGap">
          <LadderIcon />
        </div>
        The market itself is little more than a roof over an empty space, but by providing a common meeting ground where
        independent participants act on their own motivations, a responsive, vibrant environment emerges where the
        breadth of human creativity can bloom.
      </>
    ),
  },
  {
    title: 'Exploration and Innovation.',
    tags: ['NEW IDEAS', 'GROW'],
    content: (
      <>
        What we are building toward is a thriving, lively place where new ideas can be discovered and experimented with.
        With an open approach, there are no rules about what kind of applications you can build on it, and we believe
        true innovation can be explored and a platform will be created where interesting new projects can grow with the
        support of a community.
      </>
    ),
  },
  {
    title: 'Nurture and Support..',
    tags: ['SUPPORT', 'GUIDANCE'],
    content: (
      <>
        The Nervos Foundation plays a serving role in supporting a growing and dynamic ecosystem. While this effort
        began with the foundation, most importantly Nervos is defined by permissionlessness and an openness to ideas. In
        this spirit, the foundation exists to provide support and guidance for a developing robust community of
        participants.
      </>
    ),
  },
]

const functions = [
  {
    title: 'An Open Bazaar.',
    tags: ['LEARN', 'BLOCKCHAIN', 'EDUCATION', 'CRYPTO'],
    content: (
      <>
        The Common Knowledge Base Education Hub, your go-to platform for insightful articles about blockchain and Nervos
        technology.
        <p>
          Our platform is designed to provide accessible and engaging educational content to help you better understand
          the complexities of blockchain technology and the unique features of Nervos.
        </p>
        <p>
          We believe that education is the key to unlocking the true potential of blockchain, we&apos;ve created
          articles that are informative, engaging, and easy to understand. Whether you are new to the world of
          blockchain or an experienced professional, our articles will help you deepen your knowledge and stay
          up-to-date on the latest developments in the field.
        </p>
        <StyledLink isColored isUnderlined linkData={{ label: 'Start learning', url: 'http://placeholder' }} />
      </>
    ),
  },
]
const extensionTitle = 'Vision for the Future.'

const Foundation: NextPage = () => {
  const isMobile = useIsMobile()
  console.log(isMobile, 'isMobile')

  const floatIcons = (
    <div className={styles.icons}>{isMobile ? <FoundationMobileFloatIconGroup /> : <FoundationFloatIconGroup />}</div>
  )

  return (
    <Page className={clsx(presets.themeLight)}>
      <BaseSeparatePage
        title={title}
        floatIcons={floatIcons}
        description={description}
        positionsData={positionsData}
        editor={editor}
        functions={functions}
        functionsExtensionTitle={{ extensionTitle, extensionTitleFunctions }}
        functionsTitleClassName={styles.functionsTitleClass}
        extensionTitleFunctionsClassName={styles.extensionTitleFunctionsClassName}
        functionsClassName={styles.functionsClassName}
        isProgressBar={false}
        isNeedSupports
      />
    </Page>
  )
}

export default Foundation
