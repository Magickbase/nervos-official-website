import { GetStaticProps, type NextPage } from 'next'
import Head from 'next/head'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { StyledLink } from 'src/components/StyledLink'
import { Author, fetchContributors, LastAuthor, lastContributor, REPO } from 'src/utils'
import EmbellishedLeft from './embellished_left.svg'
import EmbellishedRight from './embellished_right.svg'
import { useIsMobile } from '../../hooks'

import styles from './index.module.scss'

import {
  WalletIcon,
  NeuronWalletIcon,
  CkbBullIcon,
  JoyIdIcon,
  PortalWalletIcon,
  SafePalIcon,
  LedgerIcon,
  OperaWalletIcon,
  ImTokenIcon,
} from './icons'

const pagePath = '/src/pages/wallets/index.page.tsx'
const pageLink = `https://github.com/${REPO}/blob/develop${pagePath}`

const FunctionsItemTitle = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <div className={styles.functionsItemTitle}>
    {icon}
    <span>{title}</span>
  </div>
)

interface PageProps {
  contributors: Array<Author>
  author: LastAuthor | null
}

const Wallets: NextPage<PageProps> = ({ contributors, author }) => {
  const [t] = useTranslation(['wallets', 'common'])
  const isMobile = useIsMobile()

  const floatIcons = (
    <div className={styles.icons}>
      <WalletIcon />
    </div>
  )

  const title = <div>{t('title')}</div>
  const description = t('slogan')
  const info = t('contribution_welcome', { ns: 'common' })
  const functions = [
    {
      title: t('neuron.title'),
      titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<NeuronWalletIcon />} />,
      tags: ['WINDOWS', 'MACOS', 'LINUX'],
      content: (
        <>
          {t('neuron.description')
            .split('\n')
            .map(p => (
              <div key={p}>{p}</div>
            ))}
          <div className="oneLineGap">
            <StyledLink href="https://github.com/nervosnetwork/neuron/releases" colored>
              {t('download')}
            </StyledLink>
            <br />
            <StyledLink href="https://docs.nervos.org/docs/basics/guides/crypto%20wallets/neuron/" colored>
              {t('tutorials')}
            </StyledLink>
          </div>
        </>
      ),
    },
    {
      title: t('ckbull.title'),
      titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<CkbBullIcon />} />,
      tags: ['ANDROID', 'IOS'],
      content: (
        <>
          {t('ckbull.description')}
          <div className="oneLineGap">
            <StyledLink href="https://ckbull.app/#download" colored>
              {t('download')}
            </StyledLink>
            <br />
            <StyledLink
              href="https://jackylhh.notion.site/How-to-use-CKBull-wallet-89153cac673447b0bf827d1f6f7d151c"
              colored
            >
              {t('tutorials')}
            </StyledLink>
          </div>
        </>
      ),
    },
    {
      title: t('joyid.title'),
      titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<JoyIdIcon />} />,
      tags: ['WEB-BASED WALLET'],
      content: (
        <>
          {t('joyid.description')}
          <div className="oneLineGap">
            <StyledLink href="https://joy.id/" colored>
              {t('official_website')}
            </StyledLink>
          </div>
        </>
      ),
    },
    {
      title: t('portal_wallet.title'),
      titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<PortalWalletIcon />} />,
      tags: ['WEB-BASED WALLET'],
      content: (
        <>
          {t('portal_wallet.description')}
          <div className="oneLineGap">
            <StyledLink href="https://ckb.pw/" colored>
              Portal Wallet
            </StyledLink>
          </div>
        </>
      ),
    },
    {
      title: t('safepal.title'),
      titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<SafePalIcon />} />,
      tags: ['ANDROID', 'IOS', 'HARDWARE WALLET'],
      content: (
        <>
          <p>{t('safepal.description')}</p>

          <StyledLink href="https://www.safepal.com/" colored>
            {t('official_website')}
          </StyledLink>
          <br />
          <StyledLink href="https://blog.safepal.com/ckb/" colored>
            {t('tutorials')}
          </StyledLink>
        </>
      ),
    },
    {
      title: 'Ledger',
      titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<LedgerIcon />} />,
      tags: ['HARDWARE WALLET'],
      content: (
        <>
          {t('ledger.description')}
          <div className="oneLineGap">
            <StyledLink href="https://www.ledger.com/" colored>
              {t('official_website')}
            </StyledLink>
          </div>
        </>
      ),
    },
    {
      title: t('opera_wallet.title'),
      titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<OperaWalletIcon />} />,
      tags: ['ANDROID'],
      content: (
        <>
          {t('opera_wallet.description')}
          <div className="oneLineGap">
            <StyledLink href="https://www.opera.com/download" colored>
              {t('download')}
            </StyledLink>
            <br />
            <StyledLink
              href="https://medium.com/@nervosnetwork/sending-and-receiving-ckb-via-operas-android-wallet-28bfc6481390"
              colored
            >
              {t('tutorials')}
            </StyledLink>
          </div>
        </>
      ),
    },
    {
      title: t('imtoken.title'),
      titleRender: (title: string) => <FunctionsItemTitle title={title} icon={<ImTokenIcon />} />,
      tags: ['ANDROID', 'IOS'],
      content: (
        <>
          {t('imtoken.description')
            .split('\n')
            .map(p => (
              <div key={p}>{p}</div>
            ))}
          <div className="oneLineGap">
            <StyledLink href="https://token.im/" colored>
              {t('official_website')}
            </StyledLink>
            <br />
            <StyledLink href="https://token.im/ckb-wallet" colored>
              {t('download')}
            </StyledLink>
          </div>
        </>
      ),
    },
  ]

  return (
    <>
      <Head>
        <title>Nervos Network | Wallets</title>
      </Head>
      <BaseSeparatePage
        embellishedElements={
          isMobile
            ? [
                {
                  content: (
                    <EmbellishedLeft
                      width={430}
                      height={265}
                      style={{ transform: 'rotate(-90deg)', transformOrigin: 'right top' }}
                    />
                  ),
                  top: 264,
                  right: 8 + 265,
                },
                {
                  content: (
                    <EmbellishedRight
                      width={374}
                      height={196}
                      style={{ transform: 'scaleX(-1) rotate(90deg)', transformOrigin: 'left top' }}
                    />
                  ),
                  top: 70,
                  left: 38,
                },
              ]
            : [
                {
                  content: (
                    <EmbellishedLeft
                      width={744}
                      height={459}
                      style={{ transform: 'rotate(-90deg)', transformOrigin: 'right top' }}
                    />
                  ),
                  top: 117,
                  right: 396 + 459,
                },
                {
                  content: <EmbellishedRight width={595} height={310} style={{ transform: 'scaleX(-1)' }} />,
                  top: 425,
                  left: 114,
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
  const lng = await serverSideTranslations(locale, ['common', 'wallets'])
  return {
    props: {
      ...lng,
      author,
      contributors,
    },
  }
}

export default Wallets
