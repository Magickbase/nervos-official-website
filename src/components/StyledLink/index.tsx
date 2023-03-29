import React, { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import ArrowIcon from './arrow.svg'

import styles from './index.module.scss'

export type StyledLinkProps = {
  href: string
  space?: number
  colored?: boolean
  underline?: boolean
  icon?: boolean
  openNewTab?: boolean
  className?: string
}

export const StyledLink: FC<PropsWithChildren<StyledLinkProps>> = ({
  children,
  href,
  space = 4,
  colored = false,
  underline = false,
  icon = true,
  openNewTab,
  className,
}) => {
  const isExternalLink = /^(https?:)?\/\//.test(href)
  if (openNewTab == null) openNewTab = isExternalLink

  const LinkComp = isExternalLink ? 'a' : Link

  return (
    <LinkComp
      data-colored={colored}
      data-underlined={underline}
      className={clsx(styles.styledLink, className)}
      style={{ gap: space }}
      href={href}
      target={openNewTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
    >
      {children ?? href}
      {isExternalLink && icon ? <ArrowIcon className={clsx(styles.arrowIcon)} /> : null}
    </LinkComp>
  )
}
