import { type NextPage } from 'next'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { Page } from 'src/components/Page'
import { StyledLink } from 'src/components/StyledLink'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'

import styles from './index.module.scss'

import { LearnFloatIconGroup, KnowledgeBaseIcon } from './icons'

const title = <div>Learn.</div>
const description = `Nervos encompasses an extensive amount of innovation, check out some resources to get started.`
const info = `As an open-source community-driven initiative, we welcome your input and encourage you to suggest new topics, add content, and provide examples where you believe it could be helpful.`
const editor = { id: '@neon.bit', avatar: 'https://avatars.githubusercontent.com/u/22511289?s=96&v=4' }

const functions = [
  {
    title: 'Common Knowledge Base - Education Hub.',
    tags: ['LEARN', 'BLOCKCHAIN', 'EDUCATION', 'CRYPTO'],
    content: (
      <>
        <KnowledgeBaseIcon />
        <p>
          The Common Knowledge Base Education Hub, your go-to platform for insightful articles about blockchain and
          Nervos technology.
        </p>
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
        <StyledLink
          isColored
          isUnderlined
          linkData={{ label: 'Start learning', url: 'https://nervos.gitbook.io/developer-training-course/' }}
        />
      </>
    ),
  },
  {
    title: 'RFCs (Request For Comment).',
    tags: ['CONTRIBUTION', 'COMMUNITY'],
    content: (
      <>
        Nervos is a result of several protocols and innovations, making it critical to have clear documentation and
        technical specifications. To achieve this, Nervos uses an RFC (request for comment) process that is
        community-driven and open. This process encourages active participation from users and developers alike,
        fostering collaboration, and generating valuable feedback.
        <p>For more information on this process, we encourage you to explore and learn more about it.</p>
        <StyledLink
          isColored
          isUnderlined
          linkData={{ label: 'Learn More ', url: 'https://github.com/nervosnetwork/rfcs' }}
        />
        &nbsp;|&nbsp;
        <StyledLink
          isColored
          isUnderlined
          linkData={{ label: 'Contribute', url: 'https://github.com/nervosnetwork/rfcs/pulls' }}
        />
      </>
    ),
  },
  {
    title: 'Youtube.',
    tags: ['VIDEOS', 'HOW-TOs', 'EXPLAINERS'],
    content: (
      <>
        The Nervos YouTube channel is a digital platform dedicated to providing high-quality and informative videos on
        the latest developments and trends in the world of blockchain and cryptocurrency. Our videos cover a wide range
        of topics related to blockchain and crypto, including technology innovations, and latest news and updates.
        <p>
          Nervos strive to be a reliable source of information for crypto enthusiasts, investors, and anyone interested
          in learning about this exciting and dynamic field.
        </p>
        <StyledLink
          isColored
          isIconed
          linkData={{ label: 'Youtube', url: 'https://www.youtube.com/c/NervosNetwork' }}
        />
      </>
    ),
  },
  {
    title: 'Medium.',
    tags: ['BLOG', 'ARTICLES', 'NEWS'],
    content: (
      <>
        The Nervos Medium Channel is where our community drives the conversation. Our channel is home to a vibrant and
        engaged community of Nervos enthusiasts who are passionate about exploring the latest developments in the Nervos
        ecosystem.
        <p>
          As a community-driven platform, we feature articles written by members of the Nervos community, covering a
          diverse range of topics related to blockchain technology, cryptocurrency, and everything in between.
        </p>
        <StyledLink isColored isIconed linkData={{ label: 'Medium', url: 'https://medium.com/nervosnetwork' }} />
      </>
    ),
  },
  {
    title: 'Blog.',
    tags: ['BLOG', 'UPDATES', 'ANNOUNCEMENTS', 'RELEASES', 'TUTORIALS'],
    content: (
      <>
        <p>
          The Nervos blog is your go-to source for updates, partnership news, and announcements related to the Nervos
          Network and its ecosystem. Stay tuned for the latest developments in the world of Nervos.
        </p>
        <StyledLink isColored isIconed linkData={{ label: 'Go to blog', url: '/blogs' }} />
      </>
    ),
  },
]

const Learn: NextPage = () => {
  const floatIcons = (
    <div className={styles.icons}>
      <LearnFloatIconGroup />
    </div>
  )

  return (
    <Page>
      <BaseSeparatePage
        embellishedElements={[
          { content: <EmbellishedLeft width={595} height={310} />, top: 435, right: 420 },
          { content: <EmbellishedRight width={940} height={503} />, top: -130, left: 100 },
        ]}
        editLink="https://github.com/Magickbase/nervos-official-website/blob/develop/src/pages/learn/index.page.tsx"
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

export default Learn
