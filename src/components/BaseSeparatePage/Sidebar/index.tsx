import React, { FC } from 'react'
import clsx from 'clsx'
import { StyledLink } from '../../StyledLink'
import { StyledTOC } from './StyledTOC'

import GithubIcon from './githubIcon.svg'
import DownArrow from './downArrow.svg'

import styles from './index.module.scss'

export type FunctionsType = {
  className?: string
  editLink?: string
}

export const Sidebar: FC<FunctionsType> = ({ className, editLink }) => {
  return (
    <div className={clsx(styles.sidebarContainer, className)}>
      <div className={clsx(styles.sidebar, className)}>
        <button className={clsx(styles.editPageButton)}>
          <GithubIcon className={clsx(styles.githubIcon)} />
          <StyledLink
            className={styles.link}
            href={editLink ?? 'https://github.com/Magickbase/nervos-official-website'}
            space={8}
          >
            EDIT PAGE
          </StyledLink>
        </button>

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
