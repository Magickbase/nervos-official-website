import React, { FC } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { StyledTOC } from './StyledTOC'

import GithubIcon from './githubIcon.svg'
import DownArrow from './downArrow.svg'
import ObliqueArrow from './oblique_arrow.svg'

import styles from './index.module.scss'

export type FunctionsType = {
  className?: string
  editLink?: string
}

export const Sidebar: FC<FunctionsType> = ({ className, editLink }) => {
  return (
    <div className={clsx(styles.sidebarContainer, className)}>
      <div className={clsx(styles.sidebar, className)}>
        <Link
          className={clsx(styles.editPageButton)}
          href={editLink ?? 'https://github.com/Magickbase/nervos-official-website'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          EDIT PAGE
          <ObliqueArrow />
        </Link>

        <div className={clsx(styles.onThisPage)}>
          <div>On this Page:</div>
          <StyledTOC />
        </div>

        <div className={clsx(styles.onThisPageForMobile)}>
          <span>
            On this page
            <DownArrow />
          </span>
        </div>
      </div>
    </div>
  )
}
