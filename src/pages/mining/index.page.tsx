import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { BaseSeparatePage } from '../../components/BaseSeparatePage'
import { StyledLink } from '../../components/StyledLink'
import { Author, fetchContributors, LastAuthor, lastContributor, REPO } from '../../utils'
import { useIsMobile } from '../../hooks'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'

import styles from './index.module.scss'

import { CkbPowFloatIconGroup, HeartIcon } from './icons'

const pagePath = '/src/pages/mining/index.page.tsx'
const pageLink = `https://github.com/${REPO}/blob/develop${pagePath}`

interface PageProps {
  contributors: Array<Author>
  author: LastAuthor | null
}

const Mining: NextPage<PageProps> = ({ contributors, author }) => {
  const [t] = useTranslation(['mining', 'common'])
  const isMobile = useIsMobile()

  const floatIcons = (
    <div className={styles.icons}>
      <CkbPowFloatIconGroup />
    </div>
  )

  const title = (
    <div style={{ maxWidth: '550px' }}>
      <Trans t={t} i18nKey={'title'}>
        CKB
        <HeartIcon style={{ margin: '0 16px', width: '0.846em' }} />
        PoW
      </Trans>
    </div>
  )
  const description = t('slogan')
  const info = t('contribution_welcome', { ns: 'common' })
  const functions = [
    {
      title: t('why-pow.title'),
      tags: ['POW', 'LAYER 1'],
      content: t('why-pow.description'),
    },
    {
      title: t('consensus.title'),
      tags: ['NC-MAX', 'PERFORMANCE'],
      content: (
        <>
          <p>{t('consensus.description.text1')}</p>
          <p>{t('consensus.description.text2')}</p>
          <p>
            <Trans t={t} i18nKey={'consensus.description.text3'}>
              Read the&nbsp;
              <StyledLink href="https://eprint.iacr.org/2020/1101" colored underline>
                NC-max paper
              </StyledLink>
              &nbsp;and this&nbsp;
              <StyledLink
                href="https://medium.com/nervosnetwork/breaking-the-throughput-limit-of-nakamoto-consensus-ccdf65fe0832"
                colored
                underline
              >
                article
              </StyledLink>
              , and watch this&nbsp;
              <StyledLink href="https://www.youtube.com/watch?v=mYS-A1CK6zc" colored underline>
                video
              </StyledLink>
              &nbsp;to learn more.
            </Trans>
          </p>
        </>
      ),
    },
    {
      title: t('hash_function.title'),
      tags: ['EAGLESONG', 'ASIC', 'MINING'],
      content: (
        <>
          <p>{t('hash_function.description.text1')}</p>
          <p>
            <Trans t={t} i18nKey={'hash_function.description.text2'}>
              To learn more, read our
              <StyledLink href="https://docs.nervos.org/docs/basics/guides/mining-ckb/" colored underline>
                mining guide
              </StyledLink>
              &nbsp; and the pages dedicated to &nbsp;
              <StyledLink href="https://minerstat.com/coin/CKB/profitability" colored underline>
                mining rigs
              </StyledLink>
              and
              <StyledLink href="https://miningpoolstats.stream/nervos" colored underline>
                mining pools
              </StyledLink>
              .
            </Trans>
          </p>
        </>
      ),
    },
  ]

  const resourceData = {
    resourceTitle: t('mining_resources.title'),
    resources: [
      {
        title: t('mining_resources.eagleson.title'),
        content: t('mining_resources.eagleson.description'),
        link: 'https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0010-eaglesong/0010-eaglesong.md',
      },
      {
        title: t('mining_resources.mining_pools.title'),
        content: t('mining_resources.mining_pools.description'),
        link: 'https://miningpoolstats.stream/nervos',
      },

      {
        title: t('mining_resources.mining_charts.title'),
        content: t('mining_resources.mining_charts.description'),
        link: 'https://explorer.nervos.org/charts',
      },
      {
        title: t('mining_resources.mining_rigs.title'),
        content: t('mining_resources.mining_rigs.description'),
        link: 'https://minerstat.com/coin/CKB/profitability',
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Nervos Network | Mining</title>
      </Head>
      <BaseSeparatePage
        embellishedElements={
          isMobile
            ? [
                { content: <EmbellishedLeft width={430} height={242} />, top: 151, right: -49 },
                {
                  content: <EmbellishedRight width={430} height={265} style={{ transform: 'rotate(180deg)' }} />,
                  top: 443,
                  left: -81,
                },
              ]
            : [
                { content: <EmbellishedLeft width={744} height={420} />, top: 146, right: 484 },
                {
                  content: <EmbellishedRight width={744} height={459} style={{ transform: 'rotate(180deg)' }} />,
                  top: 397,
                  left: 210,
                },
              ]
        }
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

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  const contributors = await fetchContributors()
  const author = await lastContributor(pagePath)
  const lng = await serverSideTranslations(locale, ['common', 'mining'])
  return {
    props: {
      ...lng,
      author,
      contributors,
    },
  }
}

export default Mining
