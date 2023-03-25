import { type NextPage } from 'next'
import clsx from 'clsx'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { Page } from 'src/components/Page'
import { StyledLink } from 'src/components/StyledLink'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'

import presets from '../../styles/presets.module.scss'
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

const title = <div>Download a Wallet and Start Exploring the Nervos Ecosystem .</div>
const description = `Choose your ideal wallet and start exploring and interacting with the vibrant Nervos ecosystem.`
const info = `As an open-source community-driven initiative, we welcome your input and encourage you to suggest new topics, add content, and provide examples where you believe it could be helpful.`
const editor = { id: '@neon.bit', avatar: 'https://avatars.githubusercontent.com/u/22511289?s=96&v=4' }

const FunctionsItemTitle = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <div className={styles.functionsItemTitle}>
    {icon}
    <span>{title}</span>
  </div>
)

const functions = [
  {
    title: <FunctionsItemTitle title="Neuron Wallet" icon={<NeuronWalletIcon />} />,
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
    title: <FunctionsItemTitle title="CKBull" icon={<CkbBullIcon />} />,
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
    title: <FunctionsItemTitle title="JoyID" icon={<JoyIdIcon />} />,
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
    title: <FunctionsItemTitle title="Portal Wallet" icon={<PortalWalletIcon />} />,
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
    title: <FunctionsItemTitle title="SafePal" icon={<SafePalIcon />} />,
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
    title: <FunctionsItemTitle title="Ledger" icon={<LedgerIcon />} />,
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
    title: <FunctionsItemTitle title="Opera Wallet" icon={<OperaWalletIcon />} />,
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
    title: <FunctionsItemTitle title="imToken" icon={<ImTokenIcon />} />,
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

const Wallets: NextPage = () => {
  const floatIcons = (
    <div className={styles.icons}>
      <WalletIcon />
    </div>
  )

  return (
    <Page className={clsx(presets.themeLight)}>
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
        editLink="https://github.com/Magickbase/nervos-official-website/blob/develop/src/pages/wallets/index.page.tsx"
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

export default Wallets
