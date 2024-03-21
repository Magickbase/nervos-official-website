import clsx from 'clsx'
import { ComponentProps, FC } from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { StyledLink } from 'src/components/StyledLink'
import { FooterMedia } from 'src/components/Footer/components/FooterMedia'
import { FooterLinkGroup, FooterLinkGroupProps } from 'src/components/Footer/components/FooterLinkGroup'
import {
  XIcon,
  DiscordIcon,
  TelegramIcon,
  LinkedInIcon,
  RedditIcon,
  YoutubeIcon,
  TIcon,
} from 'src/components/Footer/components/FooterMedia/icons'
import IconFoundationWhiteLogo from './icons/foundationWhiteLogo.svg'
import styles from './index.module.scss'

type MediasProps = {
  label: string | React.ReactNode
  url: string
}
export type FooterProps = ComponentProps<'div'> & { limitMaxWidth?: number | false }

export const Footer: FC<FooterProps> = props => {
  const [t] = useTranslation('common', { keyPrefix: 'navigation' })
  const { limitMaxWidth = 1200, className, ...divProps } = props

  const footerLinkGroups: FooterLinkGroupProps[] = [
    {
      title: t('discover'),
      links: [
        { label: 'CKB', url: '/ckbpage' },
        { label: t('mining'), url: '/mining' },
        { label: t('wallets'), url: '/wallets' },
        { label: t('journey'), url: '/journey' },
        { label: t('wiki'), url: 'https://www.wikiwand.com/en/Nervos_Network' },
        {
          label: t('media_kit'),
          url: '/media-kit',
        },
      ],
    },
    {
      title: (
        <StyledLink className={styles.titleLink} href="/developers">
          {t('developers')}
        </StyledLink>
      ),
      links: [
        { label: t('documentation'), url: 'https://docs.nervos.org/' },
        { label: t('github'), url: 'https://github.com/nervosnetwork/' },
        { label: t('explorer'), url: 'https://explorer.nervos.org/' },
      ],
    },
    {
      title: t('ecosystem'),
      links: [
        { label: t('cryptape'), url: 'https://cryptape.com/' },
        { label: t('godwoken'), url: 'https://godwoken.com/' },
        { label: t('nervina_labs'), url: 'https://nervina.io/' },
        { label: t('tunnel_vision_labs'), url: 'https://tunnelvisionlabs.xyz/' },
        { label: t('axon'), url: 'https://axonweb3.io/' },
        { label: t('.bit'), url: 'https://www.did.id/' },
        { label: t('magickbase'), url: 'https://github.com/Magickbase/' },
      ],
    },
    {
      title: (
        <StyledLink className={styles.titleLink} href="/community">
          {t('community')}
        </StyledLink>
      ),
      links: [
        { label: t('community_fund_dao'), url: 'https://dao.ckb.community/' },
        { label: t('nervos_talk_forum'), url: 'https://talk.nervos.org/' },
        { label: t('rfcs'), url: 'https://github.com/nervosnetwork/rfcs/' },
        { label: t('ckb_nodes'), url: 'https://nodes.ckb.dev/' },
      ],
    },
    {
      title: (
        <StyledLink className={styles.titleLink} href="/learn">
          {t('learn')}
        </StyledLink>
      ),
      links: [
        { label: t('knowledge_base'), url: '/knowledge-base' },
        { label: t('medium'), url: 'https://medium.com/nervosnetwork' },
        { label: t('youtube'), url: 'https://www.youtube.com/c/NervosNetwork' },
      ],
    },
  ]

  // Todo: the url is temporarily filled with placeholders
  const medias: MediasProps[] = [
    {
      label: <XIcon />,
      url: 'https://x.com/NervosNetwork',
    },
    {
      label: <DiscordIcon />,
      url: 'https://discord.gg/FKh8Zzvwqa',
    },
    {
      label: <TelegramIcon />,
      url: 'https://t.me/NervosNetwork',
    },
    {
      label: <LinkedInIcon />,
      url: 'https://www.linkedin.com/company/nervos',
    },
    {
      label: <RedditIcon />,
      url: 'https://www.reddit.com/r/NervosNetwork/',
    },
    {
      label: <YoutubeIcon />,
      url: 'https://www.youtube.com/c/NervosNetwork',
    },
    {
      label: <TIcon />,
      url: 'https://talk.nervos.org/',
    },
  ]

  return (
    <div className={clsx(styles.footer, className)} {...divProps}>
      <div className={styles.content}>
        <div className={styles.guide}>
          <div className={styles.guideMedias}>
            <div className={clsx(styles.footerMedia)}>
              <IconFoundationWhiteLogo style={{ width: 180 }} />
              <div className={styles.medias}>
                {medias?.map(({ label, url }) => (
                  <Link href={url} key={url} target="_blank" rel="noopener noreferrer">
                    {label}
                  </Link>
                ))}
              </div>

              <div className={styles.copyright}>© Nervos Foundation All Rights Reserved.</div>
            </div>
          </div>

          <div className={styles.guideLinks}>
            {footerLinkGroups?.map(({ title, links }, index) => (
              <FooterLinkGroup title={title} links={links} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
