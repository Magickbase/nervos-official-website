import type { GetStaticProps, NextPage } from 'next'
import { Trans, useTranslation } from 'next-i18next'
import Head from 'next/head'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { StyledLink } from 'src/components/StyledLink'
import { REPO, fetchContributors, lastContributor, Author, LastAuthor } from 'src/utils'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'
import { useBodyClass, useIsMobile } from '../../hooks'

import presets from '../../styles/presets.module.scss'
import styles from './index.module.scss'

import { CommunityHubFloatIconGroup } from './icons'

const pagePath = '/src/pages/community/index.page.tsx'
const pageLink = `https://github.com/${REPO}/blob/develop${pagePath}`

const InvolvedItem = ({
  titleLink: { label, url },
  description,
}: {
  titleLink: { label: string; url: string }
  description: string
}) => (
  <>
    <StyledLink className={styles.involvedItemLink} href={url} space={8}>
      {label}
    </StyledLink>
    <div>{description}</div>
  </>
)

interface PageProps {
  contributors: Array<Author>
  author: LastAuthor | null
}

const Community: NextPage<PageProps> = ({ contributors, author }) => {
  const [t] = useTranslation(['community', 'common'])
  const isMobile = useIsMobile()

  useBodyClass([presets.themeDark ?? ''])

  const title = <div>{t('title')}</div>
  const description = t('slogan')
  const info = t('contribution_welcome', { ns: 'common' })
  const involvedList = [
    {
      label: t('get_involved.nervos_talk.title'),
      url: 'https://talk.nervos.org/',
      description: t('get_involved.nervos_talk.description'),
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/NervosNetwork',
      description: t('get_involved.twitter.description'),
    },
    {
      label: t('get_involved.discord.title'),
      url: 'https://discord.gg/FKh8Zzvwqa',
      description: t('get_involved.discord.description'),
    },
    {
      label: t('get_involved.telegram.title'),
      url: 'https://t.me/NervosNetwork',
      description: t('get_involved.telegram.description'),
    },
    {
      label: t('get_involved.reddit.title'),
      url: 'https://www.reddit.com/r/NervosNetwork/',
      description: t('get_involved.reddit.description'),
    },
    {
      label: t('get_involved.youtube.title'),
      url: 'https://www.youtube.com/c/NervosNetwork',
      description: t('get_involved.youtube.description'),
    },
  ]

  const functions = [
    {
      title: t('community_fund_dao.title'),
      tags: ['GRANTS', 'ECOSYSTEM', 'DAO'],
      content: t('community_fund_dao.description'),
    },
    {
      title: t('requests_for_comment.title'),
      tags: ['COMMUNITY', 'COMMENTS', 'CONTRIBUTION'],
      content: (
        <Trans t={t} i18nKey="requests_for_comment.description">
          Influence the development direction of the Nervos network through the open, community-driven RFC process.
          Learn more about it&nbsp;
          <StyledLink href="https://github.com/nervosnetwork/rfcs" colored underline>
            here
          </StyledLink>
          .
        </Trans>
      ),
    },
    {
      title: t('get_involved.title'),
      tags: ['MEETUPS', 'SOCIAL', 'CHAT', 'CONTRIBUTION'],
      content: (
        <div>
          {involvedList.map(({ label, url, description }, index) => (
            <div className={styles.involvedItemsWrap} key={index}>
              <InvolvedItem titleLink={{ label, url }} description={description} />
            </div>
          ))}
        </div>
      ),
    },
  ]

  const floatIcons = (
    <div className={styles.icons}>
      <CommunityHubFloatIconGroup />
    </div>
  )

  return (
    <>
      <Head>
        <title>Nervos Network | Community</title>
      </Head>
      <BaseSeparatePage
        embellishedElements={
          isMobile
            ? [
                { content: <EmbellishedLeft width={548} height={292} />, top: 52, right: -146 },
                {
                  content: <EmbellishedRight width={430} height={267} style={{ transform: 'rotate(180deg)' }} />,
                  top: 443,
                  left: -47,
                },
              ]
            : [
                { content: <EmbellishedLeft width={940} height={503} />, top: 154, right: 296 },
                {
                  content: <EmbellishedRight width={744} height={459} style={{ transform: 'rotate(180deg)' }} />,
                  top: 568,
                  left: 404,
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
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  const contributors = await fetchContributors()
  const author = await lastContributor(pagePath)
  const lng = await serverSideTranslations(locale, ['common', 'community'])
  return {
    props: {
      ...lng,
      author,
      contributors,
    },
  }
}

export default Community
