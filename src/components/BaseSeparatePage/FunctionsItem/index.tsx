import React, { FC } from 'react'
import clsx from 'clsx'

import styles from './index.module.scss'

export type FunctionsItemType = {
  id?: string
  title: string | React.ReactNode
  tags?: string[]
  idx?: number
  content?: string | React.ReactNode
  isProgressBar?: boolean
  className?: string
}

const TagItem = ({ tag }: { tag: string }) => <div className={clsx(styles.tagItem)}>{tag}</div>

export const FunctionsItem: FC<FunctionsItemType> = ({ id, title, tags, content, isProgressBar, idx, className }) => {
  return (
    <div
      data-is-progress-bar={isProgressBar}
      id={id ? id : typeof title === 'string' ? title : `functions-${idx!}`}
      className={clsx(styles.functionsItem, 'observeTitle', className)}
    >
      <div className={clsx(styles.titleWrap)}>
        <div className={clsx(styles.title)}>{title}</div>
        <div className={clsx(styles.tags)}>
          {tags?.map((tag, index) => (
            <TagItem tag={tag} key={index} />
          ))}
        </div>
      </div>
      <div className={clsx(styles.content)}>{content}</div>
    </div>
  )
}
