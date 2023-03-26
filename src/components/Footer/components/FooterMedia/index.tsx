import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { DISABLE_CGOL_MOUSE_CONTROLLER } from '../../../../components/ConwayGameOfLife'
import { SubscribeWrap } from './SubscribeWrap'
import { TwitterIcon, DiscordIcon, TelegramIcon, LinkedInIcon, RedditIcon, YoutubeIcon, TIcon } from './icons'

import styles from './index.module.scss'

export type MediasProps = {
  label: string | React.ReactNode
  url: string
}

export const FooterMedia: React.FC = () => {
  const title = 'Become a part of the journey.'
  const description = 'Sign up to the Nervos monthly newsletter to stay ahead of the curve.'

  // Todo: the url is temporarily filled with placeholders
  const medias: MediasProps[] = [
    {
      label: <TwitterIcon />,
      url: 'https://twitter.com/NervosNetwork',
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
    <div className={clsx(styles.footerMedia, DISABLE_CGOL_MOUSE_CONTROLLER)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <SubscribeWrap />
      <div className={styles.medias}>
        {medias?.map(({ label, url }) => (
          <Link href={url} key={url} target="_blank" rel="noopener noreferrer">
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
