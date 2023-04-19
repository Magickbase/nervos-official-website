import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Trans, useTranslation } from 'next-i18next'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { StyledLink } from 'src/components/StyledLink'
import { REPO, Author, fetchContributors, lastContributor, LastAuthor } from 'src/utils'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'
import { useIsMobile } from '../../hooks'

import styles from './index.module.scss'

import { LearnFloatIconGroup, KnowledgeBaseIcon } from './icons'

const pagePath = '/src/pages/learn/index.page.tsx'
const pageLink = `https://github.com/${REPO}/blob/develop${pagePath}`

interface PageProps {
  contributors: Array<Author>
  author: LastAuthor | null
}

const Learn: NextPage<PageProps> = ({ contributors, author }) => {
  const [t] = useTranslation(['learn', 'common'])
  const isMobile = useIsMobile()

  const floatIcons = (
    <div className={styles.icons}>
      <LearnFloatIconGroup />
    </div>
  )
  const title = <div style={{ maxWidth: 528 }}>{t('title')}</div>
  const description = t('slogan')
  const info = t('contribution_welcome', { ns: 'common' })
  const functions = [
    {
      title: t('education_hub.title'),
      tags: ['LEARN', 'BLOCKCHAIN', 'EDUCATION', 'CRYPTO'],
      content: (
        <>
          <KnowledgeBaseIcon />
          <p>{t('education_hub.description.text1')}</p>
          <StyledLink href="/knowledge-base" colored underline>
            {t('education_hub.description.start_learning')}
          </StyledLink>
        </>
      ),
    },
    {
      title: t('rfc.title'),
      tags: ['CONTRIBUTION', 'COMMUNITY'],
      content: (
        <>
          <p>{t('rfc.description.text1')}</p>
          <StyledLink href="https://github.com/nervosnetwork/rfcs" colored underline>
            {t('rfc.description.learn_more')}
          </StyledLink>
          &nbsp;|&nbsp;
          <StyledLink href="https://github.com/nervosnetwork/rfcs/pulls" colored underline>
            {t('rfc.description.contribute')}
          </StyledLink>
        </>
      ),
    },
    {
      title: t('youtube.title'),
      tags: ['VIDEOS', 'HOW-TOs', 'EXPLAINERS'],
      content: (
        <>
          <p>
            <Trans t={t} i18nKey="youtube.description">
              Subscribe to the official Nervos Network YouTube&nbsp;
              <StyledLink href="https://www.youtube.com/c/NervosNetwork" colored underline>
                channel
              </StyledLink>
              &nbsp; to stay updated on the Nervos ecosystem and the broader blockchain industry via in-depth lectures,
              AMAs, developer workshops, and team member interviews.
            </Trans>
          </p>
        </>
      ),
    },
  ]

  return (
    <>
      <Head>
        <title>Nervos Network | Learn</title>
      </Head>
      <BaseSeparatePage
        embellishedElements={
          isMobile
            ? [
                { content: <EmbellishedLeft width={374} height={196} />, top: 467, right: -17 },
                { content: <EmbellishedRight width={581} height={311} />, top: 65, left: -74 },
              ]
            : [
                { content: <EmbellishedLeft width={595} height={310} />, top: 525, right: 420 },
                { content: <EmbellishedRight width={940} height={503} />, top: -40, left: 100 },
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
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  const contributors = await fetchContributors()
  const author = await lastContributor(pagePath)
  const lng = await serverSideTranslations(locale, ['common', 'learn'])
  return {
    props: {
      ...lng,
      author,
      contributors,
    },
  }
}

export default Learn
