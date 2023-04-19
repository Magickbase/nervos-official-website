import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Trans, useTranslation } from 'next-i18next'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { StyledLink } from 'src/components/StyledLink'
import { REPO, fetchContributors, lastContributor, Author, LastAuthor } from 'src/utils'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Embellished from './embellished.svg'
import { useIsMobile } from '../../hooks'

import styles from './index.module.scss'

import { CkbPageFloatIconGroup } from './icons'

const pagePath = '/src/pages/ckbpage/index.page.tsx'
const pageLink = `https://github.com/${REPO}/blob/develop${pagePath}`

interface PageProps {
  contributors: Array<Author>
  author: LastAuthor | null
}

const CkbPage: NextPage<PageProps> = ({ contributors, author }) => {
  const { t } = useTranslation(['ckbpage', 'common'])
  const isMobile = useIsMobile()

  const floatIcons = (
    <div className={styles.icons}>
      <CkbPageFloatIconGroup />
    </div>
  )

  const title = <div>{t('title')}</div>
  const description = t('slogan')
  const info = t('contribution_welcome', { ns: 'common' })
  const functions = [
    {
      title: t('tokenomics.title'),
      tags: ['TOKEN', 'SUPPLY', 'MINERS', 'REWARD', 'DAO'],
      content: (
        <>
          <p>
            <Trans t={t} i18nKey="tokenomics.description.text1">
              The CKB token launched with an initial supply of 33.6 billion coins, 8.4 billion of which were burned soon
              thereafter. The base issuance is 33.6 billion coins per year and halves every four years until it hits
              zero, whereas the fixed secondary issuance is 1.344 billion. Check out the detailed CKB supply structure
              and issuance schedule&nbsp;
              <StyledLink
                href="https://medium.com/@m.quinn/a-detailed-description-of-nervos-ckb-supply-and-issuance-1d55c4b101f9"
                colored
                underline
              >
                here
              </StyledLink>
              .
            </Trans>
          </p>

          <p>{t('tokenomics.description.text2')}</p>

          <p>
            <Trans t={t} i18nKey="tokenomics.description.text3">
              Long-term CKB holders can seek inflation shelter from the secondary issuance by locking their coins in
              the&nbsp;
              <StyledLink href="https://medium.com/nervosnetwork/nervos-dao-explained-95e33898b1c" colored underline>
                Nervos DAO
              </StyledLink>
              &nbsp; smart contract.
            </Trans>
          </p>
        </>
      ),
    },
    {
      title: t('get_ckb.title'),
      tags: ['EXCHANGES', 'WALLET'],
      content: (
        <>
          <Trans t={t} i18nKey="get_ckb.description">
            You can buy and sell CKB using the cryptocurrency exchanges on
            <StyledLink href="https://www.coingecko.com/en/coins/nervos-network#markets" colored underline>
              this list
            </StyledLink>
            . However, consider transferring and holding your CKB using a non-custodial cryptocurrency
            <StyledLink href="https://nervos-official-website.vercel.app/wallets" colored underline>
              wallet
            </StyledLink>
            , as holding it on centralized exchanges is risky.
          </Trans>
        </>
      ),
    },
  ]

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

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  const contributors = await fetchContributors()
  const author = await lastContributor(pagePath)
  const lng = await serverSideTranslations(locale, ['common', 'ckbpage'])
  return {
    props: {
      ...lng,
      author,
      contributors,
    },
  }
}

export default CkbPage
