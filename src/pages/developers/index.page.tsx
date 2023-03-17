import { type NextPage } from 'next'
import clsx from 'clsx'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { Page } from 'src/components/Page'
import presets from 'src/styles/presets.module.scss'
import styles from './index.module.scss'

import { ArticlesIcon, BallsIcon, QuoteIcon, SunIcon } from './icons'

const title = <div style={{ maxWidth: '550px' }}>Build on hardware, not software.</div>
const description = `Nervos' extremely generalized or abstract RISC-V-based virtual machine makes CKB the most flexible Layer 1 in the blockchain industry. CKB-VM has zero precompiles baked in and supports all cryptographic primitives, meaning developers can build powerful decentralized applications that aren't possible elsewhere.`
const info = `As an open-source community-driven initiative, we welcome your input and encourage you to suggest new topics, add content, and provide examples where you believe it could be helpful.`
const editor = { id: '@neon.bit' }

const functions = [
  {
    title: 'Why Proof-of-Work.',
    tags: ['POW', 'LAYER 1'],
    content: (
      <>
        CKB is among the few smart contract platforms that leverage the battle-tested Proof-of-Work consensus algorithm
        to ensure exceptional security and decentralization under all circumstances. This makes CKB truly permissionless
        and uniquely resistant to capture by hostile actors--precisely what a Layer 1 built for modularity should be.
      </>
    ),
  },
  {
    title: 'Consensus Algorithm: NC-Max.',
    tags: ['NC-MAX', 'PERFORMANCE'],
    content: (
      <>
        CKB uses the NC-Max consensus mechanism, a variant of Bitcoin&apos;s Nakamoto Consensus (NC). While retaining
        all of NC&apos;s advantages, NC-Max improves the performance limit and resistance to selfish mining attacks by
        adopting a two-step confirmation process. NC-Max increases transaction throughput and decreases confirmation
        times. The network can handle around 100 to 200 transactions per second but also can increase its capacity as
        bandwidth and latency improve over time. Read the <a>NC-max paper </a>🡭 and this <a>article</a>, and watch this{' '}
        <a>video</a>
        to learn more.
      </>
    ),
  },
  {
    title: 'Hash Function: Eaglesong.',
    tags: ['EAGLESONG', 'ASIC', 'MINING'],
    content: (
      <>
        CKB uses a novel, simple hash function called the Eaglesong that lowers the barrier for ASIC manufacturing.
        CKB&apos;s design is ASIC neutral, and the first ASIC was released four months after the mainnet launch. To
        learn more, read our mining guide 🡭 and the pages dedicated to mining rigs 🡭 and mining pools.
      </>
    ),
  },
]

const resources = [
  {
    title: 'Eaglesong',
    content: 'A comprehensive introduction of Eaglesong algorithm, Nervos’s new hash function for CKB proof-of-work.',
  },
  {
    title: 'Mining Pools',
    content: 'MiningPoolStats.com provides a list of CKB mining pools and other useful statistics.',
  },
  {
    title: 'Mining Charts',
    content:
      'CKB Explorer provides mining charts, such as mining difficulty, hash rate, uncle rate, epoch time, epoch length, top miners, miner versions, etc.',
  },
  {
    title: 'Mining Rigs',
    content: 'Find out popular ASIC mining rigs for CKB and their daily profits.',
  },
]

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
    <Page className={clsx(presets.themeLight)}>
      <BaseSeparatePage
        title={title}
        floatIcons={floatIcons}
        description={description}
        info={info}
        editor={editor}
        functions={functions}
        resources={resources}
      />
    </Page>
  )
}

export default Developers
