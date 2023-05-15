import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useIsMobile } from 'src/hooks'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { REPO, Author, fetchContributors, LastAuthor, lastContributor } from 'src/utils'
import { StyledLink } from 'src/components/StyledLink'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'

import styles from './index.module.scss'

import { FoundationFloatIconGroup, FoundationMobileFloatIconGroup, LadderIcon } from './icons'

const pagePath = '/src/pages/community/index.page.tsx'
const pageLink = `https://github.com/${REPO}/blob/develop${pagePath}`

interface PageProps {
  contributors: Array<Author>
  author: LastAuthor | null
}

const Foundation: NextPage<PageProps> = ({ contributors, author }) => {
  const [t] = useTranslation(['foundation', 'common'])
  const isMobile = useIsMobile()

  const floatIcons = (
    <div className={styles.icons}>{isMobile ? <FoundationMobileFloatIconGroup /> : <FoundationFloatIconGroup />}</div>
  )

  const title = <div>{t('title')}</div>
  const description = t('slogan')
  const positionsData = {
    positionsTitle: t('positioning.title'),
    positions: [
      {
        itemTitle: t('positioning.infrastructure.title'),
        itemContent: t('positioning.infrastructure.description'),
      },
      {
        itemTitle: t('positioning.guidance.title'),
        itemContent: t('positioning.guidance.description'),
      },
      {
        itemTitle: t('positioning.community.title'),
        itemContent: t('positioning.community.description'),
      },
    ],
  }

  const extensionTitle = t('vision_for_future.title')
  const extensionTitleFunctions = [
    {
      title: t('vision_for_future.an_open_bazaar.title'),
      tags: ['BOTTOM-UP APPROACH', 'BAZAAR'],
      content: (
        <>
          {t('vision_for_future.an_open_bazaar.description.text1')}
          <div className="oneLineGap">
            <LadderIcon />
          </div>
          {t('vision_for_future.an_open_bazaar.description.text2')}
        </>
      ),
    },
    {
      title: t('vision_for_future.exploration_and_innovation.title'),
      tags: ['NEW IDEAS', 'GROW'],
      content: t('vision_for_future.exploration_and_innovation.description'),
    },
    {
      title: t('vision_for_future.nurture_and_support.title'),
      tags: ['SUPPORT', 'GUIDANCE'],
      content: t('vision_for_future.nurture_and_support.description'),
    },
  ]

  const functions = [
    {
      title: t('team.title'),
      tags: ['PEOPLE OF NERVOS'],
      content: (
        <>
          <p>{t('team.description.text1')}</p>
          <p>
            <Trans t={t} i18nKey="team.description.text2">
              Visit this
              <StyledLink href="https://jobs.gohire.io/nervos-network-tzqhh93f/" colored underline>
                link
              </StyledLink>
              to see open positions with the Nervos Foundation.
            </Trans>
          </p>
        </>
      ),
    },
  ]

  return (
    <>
      <Head>
        <title>Nervos Network | Foundation</title>
      </Head>
      <BaseSeparatePage
        embellishedElements={
          isMobile
            ? [
                {
                  content: <EmbellishedLeft width={430} height={245} style={{ transform: 'scaleX(-1) scaleY(-1)' }} />,
                  top: 21,
                  right: -116,
                },
                {
                  content: <EmbellishedRight width={430} height={267} />,
                  top: 416,
                  left: -73,
                },
              ]
            : [
                {
                  content: (
                    <EmbellishedLeft
                      width={744}
                      height={420}
                      style={{ transform: 'rotate(-90deg) scaleX(-1)', transformOrigin: 'right top' }}
                    />
                  ),
                  top: 150 + 744,
                  right: 429 + 420,
                },
                {
                  content: <EmbellishedRight width={744} height={459} />,
                  top: 395,
                  left: 346,
                },
              ]
        }
        editLink={pageLink}
        title={title}
        floatIcons={floatIcons}
        description={description}
        positionsData={positionsData}
        author={author}
        contributors={contributors}
        functions={functions}
        functionsExtensionTitle={{ extensionTitle, extensionTitleFunctions }}
        functionsTitleClassName={styles.functionsTitleClass}
        extensionTitleFunctionsClassName={styles.extensionTitleFunctionsClassName}
        functionsClassName={styles.functionsClassName}
        isProgressBar={false}
        isNeedSupports
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  const contributors = await fetchContributors()
  const author = await lastContributor(pagePath)
  const lng = await serverSideTranslations(locale, ['common', 'foundation'])
  return {
    props: {
      ...lng,
      author,
      contributors,
    },
  }
}

export default Foundation
