import React from 'react'
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
  url?: string
}

export const FooterMedia: React.FC = () => {
  const title = 'Be a part of the journey.'
  const description =
    'The Nervos Network is an ambitious project with a strong mission that is always moving forward. Signing up to our monthly newsletter will give you all the updates you need.'

  // Todo: the url is temporarily filled with placeholders
  const medias: MediasProps[] = [
    {
      label: <TwitterIcon />,
      url: 'http://placeholders1',
    },
    {
      label: <DiscordIcon />,
      url: 'http://placeholders2',
    },
    {
      label: <TelegramIcon />,
      url: 'http://placeholders3',
    },
    {
      label: <LinkedInIcon />,
      url: 'http://placeholders4',
    },
    {
      label: <RedditIcon />,
      url: 'http://placeholders5',
    },
    {
      label: <YoutubeIcon />,
      url: 'http://placeholders6',
    },
    {
      label: <TIcon />,
      url: 'http://placeholders7',
    },
  ]

  return (
    <div className={styles.footerMedia}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.inputWrap}>
        <input type="text" placeholder="Your Email" />
        <ArrowIcon />
      </div>
      <div className={styles.medias}>
        {medias?.map(({ label, url }) => (
          <a href={url} key={url}>
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
