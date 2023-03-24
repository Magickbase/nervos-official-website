import { GetStaticProps, type NextPage } from 'next'
import Head from 'next/head'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { StyledLink } from 'src/components/StyledLink'
import { Author, fetchContributors, LastAuthor, lastContributor, REPO } from 'src/utils'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'

import styles from './index.module.scss'

import {
  WalletIcon,
  NeuronWalletIcon,
  CkbBullIcon,
  JoyIdIcon,
  PortalWalletIcon,
  SafePalIcon,
  LedgerIcon,
  OperaWalletIcon,
  ImTokenIcon,
} from './icons'

const title = <div>Download a wallet.</div>
const description = `Choose your ideal wallet and start exploring and interacting with the vibrant Nervos ecosystem.`
const info = `As an open-source community-driven initiative, we welcome your input and encourage you to suggest new topics, add content, and provide examples where you believe it could be helpful.`

const pagePath = '/src/pages/wallets/index.page.tsx'
const pageLink = `https://github.com/${REPO}/blob/develop${pagePath}`

const FunctionsItemTitle = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <div className={styles.functionsItemTitle}>
    {icon}
    <span>{title}</span>
  </div>
)

const functions = [
  {
    title: 'Neuron Wallet',
    titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<NeuronWalletIcon />} />,
    tags: ['WINDOWS', 'MACOS', 'LINUX'],
    content: (
      <>
        Neuron Wallet is a CKB wallet produced by the Nervos Foundation, it holds your keys and can create and broadcast
        transactions on your behalf.
        <p>
          Neuron Wallet has bundled a CKB Mainnet node and configured to connect to the CKB Mainnet. After installation,
          as you open the Neuron Wallet, the bundled Mainnet node will run.
        </p>
        <StyledLink
          isColored
          isIconed
          isNewTab
          linkData={{ label: 'Download', url: 'https://github.com/nervosnetwork/neuron/releases' }}
        />
        <br />
        <StyledLink
          isColored
          isIconed
          isNewTab
          linkData={{ label: 'Tutorials', url: 'https://docs.nervos.org/docs/basics/guides/crypto%20wallets/neuron/' }}
        />
      </>
    ),
  },
  {
    title: 'CKBull',
    titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<CkbBullIcon />} />,
    tags: ['ANDROID', 'IOS'],
    content: (
      <>
        CKBull is a mobile wallet that allows you to access and manage your CKB, tokens bridged from Force Bridge, NFTs,
        as well as deposits into the Nervos DAO, all in one place.
        <div className="oneLineGap">
          <StyledLink isColored isIconed linkData={{ label: 'Download', url: 'https://ckbull.app/#download' }} />
          <br />
          <StyledLink
            isColored
            isIconed
            isNewTab
            linkData={{
              label: 'Tutorials',
              url: 'https://jackylhh.notion.site/How-to-use-CKBull-wallet-89153cac673447b0bf827d1f6f7d151c',
            }}
          />
        </div>
      </>
    ),
  },
  {
    title: 'JoyID',
    titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<JoyIdIcon />} />,
    tags: ['WEB-BASED WALLET'],
    content: (
      <>
        JoyID is a passwordless, mnemonic-free, non-custodial, and fully decentralized wallet.
        <div className="oneLineGap">
          <StyledLink isColored isIconed isNewTab linkData={{ label: 'Official website', url: 'https://joy.id/' }} />
        </div>
      </>
    ),
  },
  {
    title: 'Portal Wallet',
    titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<PortalWalletIcon />} />,
    tags: ['WEB-BASED WALLET'],
    content: (
      <>
        Portal Wallet is not only a web-based wallet but also a complete dApp that leverages various features of Nervos.
        Users do not need to download new software or generate new keys/addresses to access Nervos CKB, as they can use
        their existing Ethereum addresses and wallets to receive and send CKB directly.
        <div className="oneLineGap">
          <StyledLink isColored isIconed isNewTab linkData={{ label: 'Portal Wallet', url: 'https://ckb.pw/' }} />
        </div>
      </>
    ),
  },
  {
    title: 'SafePal',
    titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<SafePalIcon />} />,
    tags: ['ANDROID', 'IOS', 'HARDWARE WALLET'],
    content: (
      <>
        Founded in 2018, SafePal is a cryptocurrency wallet that aims to provide a secure and user-friendly crypto
        management platform for the masses. SafePal provides hardware wallet, software wallet, and browser extension
        wallet product lines. All are paired and managed through the SafePal App, where users can easily store, swap,
        and trade. It is now serving more than 6 million users across the globe.
        <div className="oneLineGap">
          <StyledLink
            isColored
            isIconed
            isNewTab
            linkData={{ label: 'Official website', url: 'https://www.safepal.com/' }}
          />
          <br />
          <StyledLink
            isColored
            isIconed
            isNewTab
            linkData={{ label: 'Tutorials', url: 'https://blog.safepal.com/ckb/' }}
          />
        </div>
      </>
    ),
  },
  {
    title: 'Ledger',
    titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<LedgerIcon />} />,
    tags: ['HARDWARE WALLET'],
    content: (
      <>
        Ledger is the most popular hardware wallet and has support for Nervos CKB. You can store, send and receive CKB
        using your Ledger Nano X and Ledger Nano S hardware wallets. Click here for the guide.
        <div className="oneLineGap">
          <StyledLink
            isColored
            isIconed
            isNewTab
            linkData={{ label: 'Official website', url: 'https://www.ledger.com/' }}
          />
        </div>
      </>
    ),
  },
  {
    title: 'Opera Wallet',
    titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<OperaWalletIcon />} />,
    tags: ['ANDROID'],
    content: (
      <>
        Starting today, Opera’s millions of users can send and receive Nervos CKB within the crypto wallet built into
        the Opera browser on Android.
        <div className="oneLineGap">
          <StyledLink
            isColored
            isIconed
            isNewTab
            linkData={{ label: 'Download', url: 'https://www.opera.com/download' }}
          />
          <br />
          <StyledLink
            isColored
            isIconed
            isNewTab
            linkData={{
              label: 'Tutorials',
              url: 'https://medium.com/@nervosnetwork/sending-and-receiving-ckb-via-operas-android-wallet-28bfc6481390',
            }}
          />
        </div>
      </>
    ),
  },
  {
    title: 'imToken',
    titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<ImTokenIcon />} />,
    tags: ['ANDROID', 'IOS'],
    content: (
      <>
        Since its founding in May 2016, imToken has provided secure and trusted digital asset management services to
        millions of users in more than 150 countries and regions worldwide. In 2018, the team open-sourced the core code
        of imToken 2.0 on Github.
        <p>
          As a strategic partner of Nervos, imToken provides a built-in CKB wallet that enables users to safely send,
          receive and store CKB.
        </p>
        <StyledLink isColored isIconed isNewTab linkData={{ label: 'Official website', url: 'https://token.im/' }} />
        <br />
        <StyledLink isColored isIconed isNewTab linkData={{ label: 'Tutorials', url: 'https://token.im/ckb-wallet' }} />
      </>
    ),
  },
]

interface PageProps {
  contributors: Array<Author>
  author: LastAuthor | null
}

const Wallets: NextPage<PageProps> = ({ contributors, author }) => {
  const floatIcons = (
    <div className={styles.icons}>
      <WalletIcon />
    </div>
  )

  return (
    <>
      <Head>
        <title>Nervos Network | Wallets</title>
      </Head>
      <BaseSeparatePage
        embellishedElements={[
          {
            content: (
              <EmbellishedLeft
                width={744}
                height={459}
                style={{ transform: 'rotate(-90deg)', transformOrigin: 'right top' }}
              />
            ),
            top: 27,
            right: 396 + 459,
          },
          {
            content: (
              <EmbellishedRight
                width={595}
                height={310}
                style={{ transform: 'rotate(90deg) scaleY(-1)', transformOrigin: 'left top' }}
              />
            ),
            top: -170,
            left: 82,
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

export default Wallets
