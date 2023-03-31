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
        {functions?.map(({ title, titleRender, tags, content }) => (
          <FunctionsItem
            title={title}
            titleRender={titleRender}
            tags={tags}
            content={content}
            key={title}
            isProgressBar={isProgressBar}
          />
        ))}
      </div>
    </div>
  )
}
