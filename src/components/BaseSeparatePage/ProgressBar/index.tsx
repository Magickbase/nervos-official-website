import React, { FC } from 'react'
import clsx from 'clsx'
import { StyledLink } from '../../StyledLink'

import ProgressBarIcon from './progressBar.svg'
import GithubIcon from './githubIcon.svg'
import DownArrow from './downArrow.svg'

import styles from './index.module.scss'

export type FunctionsType = {
  className?: string
}

export const ProgressBar: FC<FunctionsType> = ({ className }) => {
  const EditPageButton = () => (
    <button className={clsx(styles.editPageButton)}>
      <GithubIcon className={clsx(styles.githubIcon)} />
      {/* Todo: the url is temporarily filled with placeholders*/}
      <StyledLink linkData={{ label: 'EDIT PAGE', url: 'http://pladeholder' }} isSpaced isIconed />
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
