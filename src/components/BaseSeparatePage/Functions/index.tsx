import React, { FC } from 'react'
import clsx from 'clsx'
import { FunctionsItem, FunctionsItemType } from '../FunctionsItem'

import styles from './index.module.scss'

export type FunctionsType = {
  isProgressBar?: boolean
  functions: FunctionsItemType[]
  className?: string
}

export const Functions: FC<FunctionsType> = ({ isProgressBar, functions, className }) => {
  return (
    <div className={clsx(styles.functions, className)}>
      <div className={clsx(styles.functionsItemGroup)}>
        {functions?.map(({ id, title, tags, content }, index) => (
          <FunctionsItem
            title={title}
            tags={tags}
            content={content}
            key={index}
            isProgressBar={isProgressBar}
            idx={index}
            id={id}
          />
        ))}
      </div>
    </div>
  )
}
