import React from 'react'
import clsx from 'clsx'
import { StyledLink } from '../../../StyledLink'

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

  const LinkNav = ({ label, url = '', className }: LinkNavProps) => (
    <StyledLink href={url} className={className}>
      {label}
    </StyledLink>
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
