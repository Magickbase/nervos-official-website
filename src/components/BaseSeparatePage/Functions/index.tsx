import React, { FC } from 'react'
import clsx from 'clsx'
import { StyledLink } from 'src/components/StyledLink'
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
    {/* Todo: the url is temporarily filled with placeholders*/}
    <StyledLink linkData={{ label: 'EDIT PAGE', url: 'http://pladeholder' }} isSpaced />
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
        {/* Todo: progressbar need complete later*/}
        <ProgressBar className={clsx(styles.progressBar)} />
      </div>
    </div>
  )
}
