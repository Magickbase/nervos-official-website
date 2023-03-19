import { type NextPage } from 'next'
import clsx from 'clsx'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { Page } from 'src/components/Page'
import presets from 'src/styles/presets.module.scss'
import { StyledLink } from 'src/components/StyledLink'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'

import styles from './index.module.scss'

import { ArticlesIcon, BallsIcon, QuoteIcon, SunIcon } from './icons'

const title = <div style={{ maxWidth: '550px' }}>Build on hardware, not software.</div>
const description = `Nervos' extremely generalized or abstract RISC-V-based virtual machine makes CKB the most flexible Layer 1 in the blockchain industry. CKB-VM has zero precompiles baked in and supports all cryptographic primitives, meaning developers can build powerful decentralized applications that aren't possible elsewhere.`
const info = `As an open-source community-driven initiative, we welcome your input and encourage you to suggest new topics, add content, and provide examples where you believe it could be helpful.`
const editor = { id: '@neon.bit' }

const functions = [
  {
    title: 'What unique features does CKB, as a smart contract platform, provide to developers?',
    tags: ['CKB-VM', 'CELL MODEL', 'RUST', 'SOLIDITY'],
    content: (
      <>
        Due to CKB-VM&apos;s highly abstract nature, developers virtually have unlimited freedom when building
        decentralized applications.
        <p>
          The highly abstract CKB-VM gives developers virtually unlimited freedom when it comes to building
          decentralized applications. On CKB, developers can use any programming language to build novel applications
          that have never existed and can&apos;t be built on any other blockchain.
        </p>
        <b>
          <i>With flexibility comes interoperability, and CKB is a game-changer here.</i>
        </b>
        <div className="oneLineGap">
          Applications that run on CKB are widely accessible to users from other blockchains. For example,
          <StyledLink isColored isUnderlined linkData={{ label: '.bit', url: 'http://placeholder' }} /> is a
          decentralized identity running on CKB that can be accessed with Ethereum, Polygon, Dogecoin, and Bitcoin
          wallets.
        </div>
        <p>
          That&apos;s because CKB understands the languages of and can speak to all existing and future heterogeneous
          blockchains. Additionally, the CKB-VM can run other virtual machines, including EVM and WebAssembly-based
          machines, providing developers with more execution environments to build in.
        </p>
        CKB&apos;s unique accounting model, the Cell Model, perfectly complements Nervos&apos; modular design because it
        allows the base layer to evolve without requiring disruptive hard forks. Almost all algorithms, cryptographic
        primitives, and data structures can be implemented on CKB as scripts stored within cells—instead of being
        hardcoded or baked into the virtual machine like in all other blockchains—making the network more agile and
        future-proof.
      </>
    ),
  },
  {
    title: 'Add another topic title here.',
    tags: ['CKB-VM', 'CELL MODEL'],
    content: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <b>Lorem ipsum dolor sit amet</b>
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
  },
]

const resourceData = {
  resourceTitle: 'Developer Resources.',
  resources: [
    {
      title: 'CKB Docs',
      content: 'Foundational information about CKB and technical reference materials.',
    },
    {
      title: 'Building on L2 Godwoken',
      content:
        'Documentation focused on the EVM-equivalent Godwoken network, the easiest way to launch a dApp in Nervos!',
    },
    {
      title: 'Build Club',
      content:
        'Build Club provides support for teams and individuals who would like to launch a new project in Nervos.',
    },
    {
      title: 'CKB Training Course',
      content:
        'Detailed tutorials about creating CKB transactions and details about the structure of the Layer 1 CKB blockchain.',
    },
  ],
}

const Developers: NextPage = () => {
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
    <Page className={clsx(presets.themeDark)}>
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
        title={title}
        floatIcons={floatIcons}
        description={description}
        info={info}
        editor={editor}
        functions={functions}
        resourceData={resourceData}
      />
    </Page>
  )
}

export default Developers
