import { type NextPage } from 'next'
import clsx from 'clsx'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { Page } from 'src/components/Page'
import { StyledLink } from 'src/components/StyledLink'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'

import presets from '../../styles/presets.module.scss'
import styles from './index.module.scss'

import { CkbPowFloatIconGroup, HeartIcon } from './icons'

const title = (
  <div style={{ maxWidth: '550px' }}>
    CKB
    <HeartIcon />
    PoW.
  </div>
)
const description = `Nervos launched on Nov 16, 2019, and the first CKB halving will occur at Epoch 8760 (sometime around November 2023).`
const info = `As an open-source community-driven initiative, we welcome your input and encourage you to suggest new topics, add content, and provide examples where you believe it could be helpful.`
const editor = { id: '@neon.bit' }

const functions = [
  {
    title: 'Why Proof-of-Work.',
    tags: ['POW', 'LAYER 1'],
    content: (
      <>
        CKB is among the few smart contract platforms that leverage the battle-tested Proof-of-Work consensus algorithm
        to ensure exceptional security and decentralization under all circumstances.
        <p>
          This makes CKB truly permissionless and uniquely resistant to capture by hostile actors--precisely what a
          Layer 1 built for modularity should be.
        </p>
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
        adopting a two-step confirmation process.
        <div className="oneLineGap">
          NC-Max increases transaction throughput and decreases confirmation times. The network can handle around 100 to
          200 transactions per second but also can increase its capacity as bandwidth and latency improve over time.
        </div>
        Read the&nbsp;
        <StyledLink isColored isUnderlined isIconed linkData={{ label: 'NC-max paper', url: 'http://placeholder' }} />
        &nbsp;and this&nbsp;
        <StyledLink isColored isUnderlined isIconed linkData={{ label: 'article', url: 'http://placeholder' }} />, and
        watch this&nbsp;
        <StyledLink isColored isUnderlined isIconed linkData={{ label: 'video', url: 'http://placeholder' }} />
        &nbsp;to learn more.
      </>
    ),
  },
  {
    title: 'Hash Function: Eaglesong.',
    tags: ['EAGLESONG', 'ASIC', 'MINING'],
    content: (
      <>
        CKB uses a novel, simple hash function called the Eaglesong that lowers the barrier for ASIC manufacturing.
        CKB&apos;s design is ASIC neutral, and the first ASIC was released four months after the mainnet launch.
        <div className="oneLineGap">
          To learn more, read our &nbsp;
          <StyledLink isColored isUnderlined isIconed linkData={{ label: 'mining guide', url: 'http://placeholder' }} />
          &nbsp; and the pages dedicated to &nbsp;
          <StyledLink isColored isUnderlined isIconed linkData={{ label: 'mining rigs', url: 'http://placeholder' }} />
          &nbsp; and &nbsp;
          <StyledLink isColored isUnderlined isIconed linkData={{ label: 'mining pools', url: 'http://placeholder' }} />
          &nbsp;.
        </div>
      </>
    ),
  },
]

const resourceData = {
  resourceTitle: 'Miner Resources',
  resources: [
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
  ],
}

const Mining: NextPage = () => {
  const floatIcons = (
    <div className={styles.icons}>
      <CkbPowFloatIconGroup />
    </div>
  )

  return (
    <Page className={clsx(presets.themeLight)}>
      <BaseSeparatePage
        embellishedElements={[
          { content: <EmbellishedLeft width={744} height={420} />, top: 56, right: -16 },
          {
            content: <EmbellishedRight width={744} height={459} style={{ transform: 'rotate(180deg)' }} />,
            top: 307,
            left: 210,
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

export default Mining
