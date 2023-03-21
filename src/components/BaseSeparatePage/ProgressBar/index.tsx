import React, { FC } from 'react'
import clsx from 'clsx'
import { StyledLink } from '../../StyledLink'

import ProgressBarIcon from './progressBar.svg'
import GithubIcon from './githubIcon.svg'
import DownArrow from './downArrow.svg'

import styles from './index.module.scss'

export type FunctionsType = {
  className?: string
  editLink?: string
}

export const ProgressBar: FC<FunctionsType> = ({ className, editLink }) => {
  const EditPageButton = () => (
    <button className={clsx(styles.editPageButton)}>
      <GithubIcon className={clsx(styles.githubIcon)} />
      <StyledLink
        className={styles.link}
        linkData={{
          label: 'EDIT PAGE',
          url: editLink ?? 'https://github.com/Magickbase/nervos-official-website',
        }}
        isNewTab
        isSpaced
        isIconed
      />
    </button>
  )

  return (
    <div className={clsx(styles.progressBar, className)}>
      <EditPageButton />

      <div className={clsx(styles.onThisPage)}>
        <div>On this Page:</div>
        <ProgressBarIcon />
      </div>

      <div className={clsx(styles.onThisPageForMobile)}>
        <span>
          On this page
          <DownArrow />
        </span>
      </div>
    </div>
  )
}
