import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { StyledLink } from 'src/components/StyledLink'
import { Author, fetchContributors, LastAuthor, lastContributor, REPO } from 'src/utils'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'

import styles from './index.module.scss'

import { CkbPowFloatIconGroup, HeartIcon } from './icons'

const title = (
  <div style={{ maxWidth: '550px' }}>
    CKB
    <HeartIcon style={{ margin: '0 16px' }} />
    PoW.
  </div>
)
const description = `Nervos launched in Nov 2019 and the first CKB halving is expected at Epoch 8760 (around Nov 2023).`
const info = `As an open-source community-driven initiative, we welcome your input and encourage you to suggest new topics, add content, and provide examples where you believe it could be helpful.`

const pagePath = '/src/pages/mining/index.page.tsx'
const pageLink = `https://github.com/${REPO}/blob/develop${pagePath}`

const functions = [
  {
    title: 'Why Proof-of-Work.',
    tags: ['POW', 'LAYER 1'],
    content:
      'Common Knowledge Base leverages the battle-tested Proof-of-Work consensus algorithm to ensure exceptional security and decentralization under all conditions. It is truly decentralized, permissionless, and uniquely resistant to capture by adversarial actors.',
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
        <StyledLink
          linkData={{ label: 'NC-max paper', url: 'https://eprint.iacr.org/2020/1101' }}
          isNewTab
          isColored
          isUnderlined
          isIconed
        />
        &nbsp;and this&nbsp;
        <StyledLink
          linkData={{
            label: 'article',
            url: 'https://medium.com/nervosnetwork/breaking-the-throughput-limit-of-nakamoto-consensus-ccdf65fe0832',
          }}
          isNewTab
          isColored
          isUnderlined
          isIconed
        />
        , and watch this&nbsp;
        <StyledLink
          linkData={{ label: 'video', url: 'https://www.youtube.com/watch?v=mYS-A1CK6zc' }}
          isNewTab
          isColored
          isUnderlined
          isIconed
        />
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
          <StyledLink
            linkData={{ label: 'mining guide', url: 'https://docs.nervos.org/docs/basics/guides/mining-ckb/' }}
            isNewTab
            isColored
            isUnderlined
            isIconed
          />
          &nbsp; and the pages dedicated to &nbsp;
          <StyledLink
            linkData={{ label: 'mining rigs', url: 'https://minerstat.com/coin/CKB/profitability' }}
            isNewTab
            isColored
            isUnderlined
            isIconed
          />
          &nbsp; and &nbsp;
          <StyledLink
            linkData={{ label: 'mining pools', url: 'https://miningpoolstats.stream/nervos' }}
            isNewTab
            isColored
            isUnderlined
            isIconed
          />
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
      link: 'https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0010-eaglesong/0010-eaglesong.md',
    },
    {
      title: 'Mining Pools',
      content: 'MiningPoolStats.com provides a list of CKB mining pools and other useful statistics.',
      link: 'https://miningpoolstats.stream/nervos',
    },

    {
      title: 'Mining Charts',
      content:
        'CKB Explorer provides mining charts, such as mining difficulty, hash rate, uncle rate, epoch time, epoch length, top miners, miner versions, etc.',
      link: 'https://explorer.nervos.org/charts',
    },
    // TODO: link of mining rigs
    {
      title: 'Mining Rigs',
      content: 'Find out popular ASIC mining rigs for CKB and their daily profits.',
      link: '/',
    },
  ],
}

interface PageProps {
  contributors: Array<Author>
  author: LastAuthor | null
}

const Mining: NextPage<PageProps> = ({ contributors, author }) => {
  const floatIcons = (
    <div className={styles.icons}>
      <CkbPowFloatIconGroup />
    </div>
  )

  return (
    <>
      <Head>
        <title>Nervos Network | Mining</title>
      </Head>
      <BaseSeparatePage
        embellishedElements={[
          { content: <EmbellishedLeft width={744} height={420} />, top: 56, right: -16 },
          {
            content: <EmbellishedRight width={744} height={459} style={{ transform: 'rotate(180deg)' }} />,
            top: 307,
            left: 210,
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

export default Mining
