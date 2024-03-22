import React from 'react'
import clsx from 'clsx'
import { StyledLink } from '../../../StyledLink'
import { DISABLE_CGOL_MOUSE_CONTROLLER } from '../../../../components/ConwayGameOfLife'

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
          <LinkNav className={clsx(styles.linksNav, DISABLE_CGOL_MOUSE_CONTROLLER)} label={label} url={url} key={url} />
        ))}
      </div>
    </div>
  )
}
