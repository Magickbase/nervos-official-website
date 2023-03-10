import React, { FC } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import ArrowIcon from './arrow.svg'

import styles from './index.module.scss'

export type StyledLinkType = {
  linkData: { label?: string | React.ReactNode; url: string }
  isSpaced?: boolean
  isColored?: boolean
  isUnderlined?: boolean
  className?: string
}

export const StyledLink: FC<StyledLinkType> = ({
  linkData,
  isSpaced = false,
  isColored = false,
  isUnderlined = false,
  className,
}) => {
  const { label, url = '' } = linkData
  const linkLabel = label ?? url

  return (
    <div data-colored={isColored} data-underlined={isUnderlined} className={clsx(styles.styledLink, className)}>
      <span data-spaced={isSpaced} className={clsx(styles.label)}>
        {url.startsWith('http') ? (
          <a href={url} target="_self">
            {linkLabel}
          </a>
        ) : (
          <Link href="/">{linkLabel}</Link>
        )}
      </span>
      <ArrowIcon className={clsx(styles.arrowIcon)} />
    </div>
  )
}
