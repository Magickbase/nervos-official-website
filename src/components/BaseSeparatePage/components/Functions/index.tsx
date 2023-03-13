import React, { FC } from 'react'
import clsx from 'clsx'
import { FunctionsItem, FunctionsItemType } from '../FunctionsItem'
import GithubIcon from './githubIcon.svg'
import ProgressBar from './progressBar.svg'
import DownArrow from './downArrow.svg'

import styles from './index.module.scss'

export type FunctionsType = {
  functions: FunctionsItemType[]
  className?: string
}

const EditPageButton = () => (
  <button className={clsx(styles.editPageButton)}>
    <GithubIcon />
    <div className={clsx(styles.editPageString)}>EDIT PAGE </div>
  </button>
)

export const Functions: FC<FunctionsType> = ({ functions, className }) => {
  return (
    <div className={clsx(styles.functions, className)}>
      <div className={clsx(styles.editPageButtonForMobile)}>
        <EditPageButton />
      </div>
      <div className={clsx(styles.onThisPageForMobile)}>
        <span>
          On this page
          <DownArrow />
        </span>
      </div>
      <div className={clsx(styles.functionsItemGroup)}>
        {functions?.map(({ title, tags, content }, index) => (
          <FunctionsItem title={title} tags={tags} content={content} key={index} />
        ))}
      </div>
      <div className={clsx(styles.functionsProgress)}>
        <EditPageButton />
        <div className={clsx(styles.onThisPage)}>On this page: </div>
        <ProgressBar className={clsx(styles.progressBar)} />
      </div>
    </div>
  )
}
