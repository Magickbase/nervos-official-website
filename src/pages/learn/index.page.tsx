import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { StyledLink } from 'src/components/StyledLink'
import { REPO, Author, fetchContributors, lastContributor, LastAuthor } from 'src/utils'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'

import styles from './index.module.scss'

import { LearnFloatIconGroup, KnowledgeBaseIcon } from './icons'

const title = <div style={{ maxWidth: 528 }}>Spur your growth: It’s never too late to start learning.</div>
const description = `Nervos is unlike any other blockchain on the market. It comprises many moving elements and encompasses a huge amount of innovation. To learn what makes it unique and how it all works, check the following resources.`
const info = `As an open-source community-driven initiative, we welcome your input and encourage you to suggest new topics, add content, and provide examples where you believe it could be helpful.`
const pagePath = '/src/pages/learn/index.page.tsx'
const pageLink = `https://github.com/${REPO}/blob/develop${pagePath}`

const functions = [
  {
    title: 'Common Knowledge Base - Education Hub.',
    tags: ['LEARN', 'BLOCKCHAIN', 'EDUCATION', 'CRYPTO'],
    content: (
      <>
        <KnowledgeBaseIcon />
        <p>
          The Common Knowledge Base Education Hub is a comprehensive repository of in-depth resources on Nervos and
          blockchain technology in general.
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
    title: 'RFC Repository.',
    tags: ['CONTRIBUTION', 'COMMUNITY'],
    content: (
      <>
        <p>
          The Request for Comments (RFC) repository contains community proposals, standards, and documentation relating
          to the Nervos network. The RFC process encourages active participation from users and developers, fostering
          collaboration and generating valuable feedback that ultimately defines the ecosystem’s direction.
        </p>
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
        <p>
          Subscribe to the official Nervos Network YouTube&nbsp;
          <StyledLink
            isColored
            isIconed
            linkData={{ label: 'channel', url: 'https://www.youtube.com/c/NervosNetwork' }}
          />
          &nbsp; to stay updated on the Nervos ecosystem and the broader blockchain industry via in-depth lectures,
          AMAs, developer workshops, and team member interviews.
        </p>
      </>
    ),
  },
  {
    title: 'Blog.',
    tags: ['BLOG', 'UPDATES', 'ANNOUNCEMENTS', 'RELEASES', 'TUTORIALS'],
    content: (
      <>
        <p>
          The Nervos blog is the go-to source for updates, partnership news, announcements, and long-form articles
          illuminating the mission and vision of the Nervos network.
        </p>
        <StyledLink isColored isIconed linkData={{ label: 'Blog page', url: '/blogs' }} />
      </>
    ),
  },
]

interface PageProps {
  contributors: Array<Author>
  author: LastAuthor | null
}

const Learn: NextPage<PageProps> = ({ contributors, author }) => {
  const floatIcons = (
    <div className={styles.icons}>
      <LearnFloatIconGroup />
    </div>
  )

  return (
    <>
      <Head>
        <title>Nervos Network | Learn</title>
      </Head>
      <BaseSeparatePage
        embellishedElements={[
          { content: <EmbellishedLeft width={595} height={310} />, top: 435, right: 420 },
          { content: <EmbellishedRight width={940} height={503} />, top: -130, left: 100 },
        ]}
        editLink={pageLink}
        title={title}
        floatIcons={floatIcons}
        description={description}
        info={info}
        author={author}
        contributors={contributors}
        functions={functions}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const contributors = await fetchContributors()
  const author = await lastContributor(pagePath)
  return {
    props: {
      author,
      contributors,
    },
  }
}

export default Learn
