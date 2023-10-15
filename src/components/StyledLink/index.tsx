import React, { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import ArrowIcon from './arrow.svg'
import DownloadIcon from './download.svg'

import styles from './index.module.scss'

export type StyledLinkProps = {
  href: string
  space?: number
  colored?: boolean
  underline?: boolean
  icon?: boolean
  openNewTab?: boolean
  className?: string
  download?: string
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
  download,
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
      download={download}
    >
      {children ?? href}
      {isExternalLink && icon ? <ArrowIcon className={clsx(styles.arrowIcon)} /> : null}
      {download ? <DownloadIcon /> : null}
    </LinkComp>
  )
}
