import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import styles from './index.module.scss'

export type LinkNavProps = {
  label: string | React.ReactNode
  url?: string
  className?: string
}

export type FooterLinkGroupProps = {
  title: string | React.ReactNode
  links: LinkNavProps[]
}

export const FooterLinkGroup: React.FC<FooterLinkGroupProps> = props => {
  const { title, links, ...restProps } = props

  const LinkNav = ({ label, url = '', className }: LinkNavProps) =>
    url.startsWith('http') ? (
      <a href={url} target="_self" className={className}>
        {label}
      </a>
    ) : (
      <Link href="/">{label}</Link>
    )

  return (
    <div className={clsx(styles.footerLinkGroup)} {...restProps}>
      <div className={clsx(styles.title)}>{title}</div>
      <div className={clsx(styles.links)}>
        {links?.map(({ label, url }) => (
          <LinkNav className={clsx(styles.linksNav)} label={label} url={url} key={url} />
        ))}
      </div>
    </div>
  )
}
