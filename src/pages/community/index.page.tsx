import { type NextPage } from 'next'
import clsx from 'clsx'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { Page } from 'src/components/Page'
import { StyledLink } from 'src/components/StyledLink'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'

import presets from '../../styles/presets.module.scss'
import styles from './index.module.scss'

import { CommunityHubFloatIconGroup } from './icons'

const title = <div>Community Hub.</div>
const description = `Nervos is a community-driven project that abides by the cypherpunk values of openness and decentralization across all verticals. If you're passionate about crypto and continually seeking to improve the status quo, Nervos is the perfect place to be.`
const info = `As an open-source community-driven initiative, we welcome your input and encourage you to suggest new topics, add content, and provide examples where you believe it could be helpful.`
const editor = { id: '@neon.bit' }

const InvolvedItem = ({
  titleLink: { label, url },
  description,
}: {
  titleLink: { label: string; url: string }
  description: string
}) => (
  <>
    <StyledLink isIconed isSpaced linkData={{ label, url }} className={styles.involvedItemLink} />
    <div>{description}</div>
  </>
)

const involvedList = [
  {
    label: 'Nervos Meetups',
    url: 'http://placeholder',
    description:
      'Join Nervos meet-ups around the world! We love bringing our community together and regularly host meet-ups, or you can host your own in your neighborhood – just let us know.',
  },
  {
    label: 'Nervos Talk',
    url: 'http://placeholder',
    description: 'Participate and discuss technical developments on Nervos.',
  },
  {
    label: 'Twitter',
    url: 'http://placeholder',
    description: 'Stay up to date with the latest news and updates in our ecosystem.',
  },
  {
    label: 'Discord',
    url: 'http://placeholder',
    description: 'Connect with Nervos core developers and contributors.',
  },
  {
    label: 'Telegram',
    url: 'http://placeholder',
    description: 'Become a part of our vibrant community of meme connoisseurs.',
  },
  {
    label: 'Reddit',
    url: 'http://placeholder',
    description: 'Participate in regular AMAs with Nervos project developers.',
  },
  {
    label: 'Youtube',
    url: 'http://placeholder',
    description: 'Listen to podcasts and interviews with Nervos core and project developers.',
  },
]

const functions = [
  {
    title: 'Community Fund DAO.',
    tags: ['GRANTS', 'ECOSYSTEM', 'DAO'],
    content: (
      <>
        Get grants through the CKB Community Fund DAO! It&apos;s an ecosystem fund launched by Nervos and its partners
        to support community members that want to organize events, produce content, or build on Layer 1.
      </>
    ),
  },
  {
    title: 'RFCs (Request For Comment).',
    tags: ['COMMUNITY', 'COMMENTS', 'CONTRIBUTION'],
    content: (
      <>
        Nervos is the product of several protocols and innovations. It&apos;s essential to have clear documentation and
        technical specifications. For this reason, an RFC (request for comment) process is utilized. The process is open
        and community-driven. You can learn more here! Learn
        <div className="oneLineGap">
          <StyledLink isColored isUnderlined isIconed linkData={{ label: 'More', url: 'http://placeholder' }} />
          &nbsp;|&nbsp;
          <StyledLink isColored isUnderlined isIconed linkData={{ label: 'Contribute', url: 'http://placeholder' }} />
        </div>
      </>
    ),
  },
  {
    title: 'Get Involved.',
    tags: ['MEETUPS', 'SOCIAL', 'CHAT', 'CONTRIBUTE'],
    content: (
      <div>
        {involvedList.map(({ label, url, description }, index) => (
          <div className={styles.involvedItemsWrap} key={index}>
            <InvolvedItem titleLink={{ label, url }} description={description} />
          </div>
        ))}
      </div>
    ),
  },
]

const Community: NextPage = () => {
  const floatIcons = (
    <div className={styles.icons}>
      <CommunityHubFloatIconGroup />
    </div>
  )

  return (
    <Page className={clsx(presets.themeDark)}>
      <BaseSeparatePage
        embellishedElements={[
          { content: <EmbellishedLeft width={940} height={503} />, top: 64, right: -204 },
          {
            content: <EmbellishedRight width={744} height={459} style={{ transform: 'rotate(180deg)' }} />,
            top: 478,
            left: 344,
          },
        ]}
        title={title}
        floatIcons={floatIcons}
        description={description}
        info={info}
        editor={editor}
        functions={functions}
      />
    </Page>
  )
}

export default Community
