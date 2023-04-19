import { GetStaticProps, type NextPage } from 'next'
import Head from 'next/head'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { REPO, Author, fetchContributors, LastAuthor, lastContributor } from 'src/utils'
import presets from 'src/styles/presets.module.scss'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'
import { useBodyClass, useIsMobile } from '../../hooks'

import styles from './index.module.scss'

import { ArticlesIcon, BallsIcon, QuoteIcon, SunIcon } from './icons'

const pagePath = '/src/pages/developers/index.page.tsx'
const pageLink = `https://github.com/${REPO}/blob/develop${pagePath}`

interface PageProps {
  contributors: Array<Author>
  author: LastAuthor | null
}

const Developers: NextPage<PageProps> = ({ contributors, author }) => {
  const [t] = useTranslation(['developers', 'common'])
  const isMobile = useIsMobile()

  useBodyClass([presets.themeDark ?? ''])

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

  const title = <div style={{ maxWidth: '550px' }}>{t('title')}</div>
  const description = t('slogan')
  const info = t('contribution_welcome', { ns: 'common' })
  const functions = [
    {
      title: t('development_environment.title'),
      tags: ['CKB-VM', 'CELL MODEL', 'RUST', 'SOLIDITY'],
      content: (
        <>
          {t('development_environment.description')
            .split('\n')
            .map(p => (
              <p key={p}>{p}</p>
            ))}
        </>
      ),
    },
    {
      title: t('become_bigger.title'),
      tags: ['CKB-VM', 'CELL MODEL'],
      content: (
        <>
          {t('become_bigger.description')
            .split('\n')
            .map(p => (
              <p key={p}>{p}</p>
            ))}
        </>
      ),
    },
  ]

  const resourceData = {
    resourceTitle: t('developer_resources.title'),
    resources: [
      {
        title: t('developer_resources.docs.title'),
        content: t('developer_resources.docs.description'),
        link: 'https://docs.nervos.org/',
      },
      {
        title: t('developer_resources.godwoken.title'),
        content: t('developer_resources.godwoken.description'),
        link: 'https://docs.godwoken.io/',
      },
      {
        title: t('developer_resources.build_club.title'),
        content: t('developer_resources.build_club.description'),
        link: 'https://www.buildclub.xyz/',
      },
      {
        title: t('developer_resources.forum.title'),
        content: t('developer_resources.forum.description'),
        link: 'https://talk.nervos.org/',
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Nervos Network | Developers</title>
      </Head>
      <BaseSeparatePage
        embellishedElements={
          isMobile
            ? [
                {
                  content: <EmbellishedLeft width={430} height={267} style={{ transform: 'rotate(180deg)' }} />,
                  top: 462,
                  right: 51,
                },
                {
                  content: <EmbellishedRight width={430} height={245} style={{ transform: 'rotate(180deg)' }} />,
                  top: 64,
                  left: -166,
                },
              ]
            : [
                {
                  content: <EmbellishedLeft width={744} height={459} style={{ transform: 'rotate(180deg)' }} />,
                  top: 474,
                  right: 488,
                },
                {
                  content: <EmbellishedRight width={744} height={420} style={{ transform: 'rotate(180deg)' }} />,
                  top: 102,
                  left: 596,
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
  const lng = await serverSideTranslations(locale, ['common', 'developers'])
  return {
    props: {
      ...lng,
      author,
      contributors,
    },
  }
}

export default Developers
