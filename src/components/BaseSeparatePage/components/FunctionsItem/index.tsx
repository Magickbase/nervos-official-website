import React, { FC } from 'react'
import clsx from 'clsx'

import styles from './index.module.scss'

export type FunctionsItemType = {
  title: string | React.ReactNode
  tags?: string[]
  content?: string | React.ReactNode
  className?: string
}

const TagItem = ({ tag }: { tag: string }) => <div className={clsx(styles.tagItem)}>{tag}</div>

export const FunctionsItem: FC<FunctionsItemType> = ({ title, tags, content, className }) => (
  <div className={clsx(styles.functionsItem, className)}>
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
