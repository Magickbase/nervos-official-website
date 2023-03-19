import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { DISABLE_CGOL_MOUSE_CONTROLLER } from '../../../../components/ConwayGameOfLife'
import {
  TwitterIcon,
  DiscordIcon,
  TelegramIcon,
  LinkedInIcon,
  RedditIcon,
  YoutubeIcon,
  TIcon,
  ArrowIcon,
} from './icons'

import styles from './index.module.scss'

export type MediasProps = {
  label: string | React.ReactNode
  url: string
}

export const FooterMedia: React.FC = () => {
  const title = 'Be a part of the journey.'
  const description =
    'The Nervos Network is an ambitious project with a strong mission that is always moving forward. Signing up to our monthly newsletter will give you all the updates you need.'

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
      <div className={styles.inputWrap}>
        <input type="text" placeholder="Your Email" />
        <ArrowIcon />
      </div>
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
