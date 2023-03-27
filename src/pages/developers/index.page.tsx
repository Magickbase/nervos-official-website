import { GetStaticProps, type NextPage } from 'next'
import Head from 'next/head'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { REPO, Author, fetchContributors, LastAuthor, lastContributor } from 'src/utils'
import presets from 'src/styles/presets.module.scss'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'
import { useBodyClass } from '../../hooks'

import styles from './index.module.scss'

import { ArticlesIcon, BallsIcon, QuoteIcon, SunIcon } from './icons'

const title = <div style={{ maxWidth: '550px' }}>Build on hardware, not software.</div>
const description = `Nervos' extremely generalized or abstract RISC-V-based virtual machine makes Common Knowledge Base the most flexible Layer 1 in the blockchain industry. CKB-VM has zero precompiles baked in and supports all cryptographic primitives, meaning developers can build powerful decentralized applications that aren't possible elsewhere.`
const info = `As an open-source, community-driven initiative, we welcome everyone's input and encourage our community to suggest new topics, add content, and suggest improvements where they see fit.`

const pagePath = '/src/pages/developers/index.page.tsx'
const pageLink = `https://github.com/${REPO}/blob/develop${pagePath}`

const functions = [
  {
    title: 'A development environment like no other.',
    tags: ['CKB-VM', 'CELL MODEL', 'RUST', 'SOLIDITY'],
    content: (
      <>
        <p>
          The highly abstract nature of the CKB-VM empowers developers to unleash their creativity and build unique
          decentralized applications without constraints. As a development environment, Common Knowledge Base is a blank
          canvas; it has zero precompiles baked in and supports all programming languages, cryptographic primitives,
          algorithms, and data structures.
        </p>
        <p>
          Common Knowledge Bases&apos; unique accounting model, called the Cell model, combines the programmability of
          the account model with the scalability and flexibility of the UTXO model. It is a fully generalized or
          abstract accounting model that provides unlimited freedoms to system and application contract developers.
          Protocol-level account abstraction comes by default, meaning decentralized applications on the base layer can
          be accessed with wallets from all other blockchain ecosystems.
        </p>
        <p>
          Moreover, Common Knowledge Base can understand and speak the languages of all existing and future
          heterogeneous blockchains, allowing developers to build fully interoperable cross-chain applications. On the
          other hand, the CKB-VM can run other virtual machines, including EVM and Web-Assembly-based ones, which
          ensures more execution environments for developers to build in.
        </p>
      </>
    ),
  },
  {
    title: 'Become a part of something bigger.',
    tags: ['CKB-VM', 'CELL MODEL'],
    content: (
      <>
        <p>
          Beyond the advantages of building on the industry&apos;s most flexible and interoperable Layer 1, Common
          Knowledge Base developers can expect full support from the Nervos Foundation and its team of blockchain
          experts.
        </p>
        <p>
          Extensive resources, including detailed technical documentation, developer guides, and tutorials, are readily
          available for developers looking to start their Nervos journey. Nervos also organizes regular workshops,
          webinars, and hackathons, allowing prospective developers to hone their blockchain knowledge and stay at the
          cutting edge of the technology. The Foundation&apos;s team of experts is always on hand to offer direct
          assistance concerning any technical challenges application developers face.
        </p>
        <p>
          Most importantly, the vibrant community of like-minded developers and community members fosters collaboration,
          knowledge sharing, and problem-solving through dedicated forums, chat channels, and in-person meetups.
        </p>
      </>
    ),
  },
]

const resourceData = {
  resourceTitle: 'Developer Resources.',
  resources: [
    {
      title: 'CKB Docs',
      content: 'Foundational technical information about the Common Knowledge Base.',
      link: 'https://docs.nervos.org/',
    },
    {
      title: 'Building on L2 Godwoken',
      content:
        'Technical documentation for Godwoken, the EVM-equivalent Layer 2 network built on Common Knowledge Base.',
      link: 'https://docs.godwoken.io/',
    },
    {
      title: 'Build Club',
      content: 'The Build Club provides support for teams and individuals looking to launch new projects on Nervos.',
      link: 'https://www.buildclub.xyz/',
    },
    {
      title: 'Nervos Talk Forum',
      content: 'For the community to participate and discuss developments on Nervos.',
      link: 'https://talk.nervos.org/',
    },
  ],
}

interface PageProps {
  contributors: Array<Author>
  author: LastAuthor | null
}

const Developers: NextPage<PageProps> = ({ contributors, author }) => {
  useBodyClass([presets.themeDark ?? ''])

  const floatIcons = (
    <div className={styles.icons}>
      <div className={styles.quoteIcon}>
        <QuoteIcon />
      </div>
      <SunIcon />
      <BallsIcon />
      <ArticlesIcon />
    </div>
  )

  return (
    <>
      <Head>
        <title>Nervos Network | Developers</title>
      </Head>
      <BaseSeparatePage
        embellishedElements={[
          {
            content: <EmbellishedLeft width={744} height={459} style={{ transform: 'rotate(180deg)' }} />,
            top: 384,
            right: 488,
          },
          {
            content: <EmbellishedRight width={744} height={420} style={{ transform: 'rotate(180deg)' }} />,
            top: 12,
            left: 96,
          },
        ]}
        editLink={pageLink}
        title={title}
        floatIcons={floatIcons}
        description={description}
        info={info}
        author={author}
        contributors={contributors}
        functions={functions}
        resourceData={resourceData}
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

export default Developers
