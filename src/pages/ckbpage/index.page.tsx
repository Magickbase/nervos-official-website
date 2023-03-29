import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { StyledLink } from 'src/components/StyledLink'
import { REPO, fetchContributors, lastContributor, Author, LastAuthor } from 'src/utils'
import Embellished from './embellished.svg'
import { useIsMobile } from '../../hooks'

import styles from './index.module.scss'

import { CkbPageFloatIconGroup } from './icons'

const title = <div>1 CKB = 1 Byte</div>
const description = `CKByte (CKB) is the native cryptocurrency of Common Knowledge Base. It’s used for paying transaction fees and storing data, where holding one CKB permits users to store one byte of data on Nervos’ base layer.`
const info = `As an open-source community-driven initiative, we welcome your input and encourage you to suggest new topics, add content, and provide examples where you believe it could be helpful.`

const pagePath = '/src/pages/ckbpage/index.page.tsx'
const pageLink = `https://github.com/${REPO}/blob/develop${pagePath}`

const functions = [
  {
    title: 'CKB Tokenomics.',
    tags: ['TOKEN', 'SUPPLY', 'MINERS', 'REWARD', 'DAO'],
    content: (
      <>
        <p>
          The CKB token launched with an initial supply of 33.6 billion coins, 8.4 billion of which were burned soon
          thereafter. The base issuance is 33.6 billion coins per year and halves every four years until it hits zero,
          whereas the fixed secondary issuance is 1.344 billion. Check out the detailed CKB supply structure and
          issuance schedule&nbsp;
          <StyledLink
            href="https://medium.com/@m.quinn/a-detailed-description-of-nervos-ckb-supply-and-issuance-1d55c4b101f9"
            colored
            underline
          >
            here
          </StyledLink>
          .
        </p>
        <p>
          Miners receive CKB rewards from two sources: the base and secondary issuance. The secondary issuance depends
          on state occupation, where miners receive half of the secondary issuance reward if half of the circulating CKB
          coins are used to store state. When the base issuance eventually ends, miners will keep earning &quot;state
          rent&quot; income from the secondary issuance, regardless of transaction demand, which ensures they&apos;re
          incentivized to secure the blockchain long-term.
        </p>
        <p>
          Long-term CKB holders can seek inflation shelter from the secondary issuance by locking their coins in
          the&nbsp;
          <StyledLink href="https://medium.com/nervosnetwork/nervos-dao-explained-95e33898b1c" colored underline>
            Nervos DAO
          </StyledLink>{' '}
          smart contract.
        </p>
      </>
    ),
  },
  {
    title: 'How do I get CKB?',
    tags: ['EXCHANGES', 'WALLET'],
    content: (
      <>
        You can buy and sell CKB using the cryptocurrency exchanges on&nbsp;
        <StyledLink href="https://www.coingecko.com/en/coins/nervos-network#markets" colored underline>
          this list
        </StyledLink>
        . However, consider transferring and holding your CKB using a non-custodial cryptocurrency&nbsp;
        <StyledLink href="https://nervos-official-website.vercel.app/wallets" colored underline>
          wallet
        </StyledLink>
        , as holding it on centralized exchanges is risky.
      </>
    ),
  },
]

interface PageProps {
  contributors: Array<Author>
  author: LastAuthor | null
}

const CkbPage: NextPage<PageProps> = ({ contributors, author }) => {
  const isMobile = useIsMobile()

  const floatIcons = (
    <div className={styles.icons}>
      <CkbPageFloatIconGroup />
    </div>
  )

  return (
    <>
      <Head>
        <title>Nervos Network | CKB</title>
      </Head>
      <BaseSeparatePage
        embellishedElements={
          isMobile
            ? [
                {
                  content: <Embellished width={548} height={292} style={{ transform: 'rotateX(180deg)' }} />,
                  top: 453,
                  right: -8,
                },
                { content: <Embellished width={548} height={292} />, top: 79, left: -55 },
              ]
            : [
                {
                  content: <Embellished width={940} height={503} style={{ transform: 'rotateX(180deg)' }} />,
                  top: 450,
                  right: 518,
                },
                { content: <Embellished width={940} height={503} />, top: 382, left: 142 },
              ]
        }
        editLink={pageLink}
        title={title}
        floatIcons={floatIcons}
        description={description}
        info={info}
        contributors={contributors}
        author={author}
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

export default CkbPage
