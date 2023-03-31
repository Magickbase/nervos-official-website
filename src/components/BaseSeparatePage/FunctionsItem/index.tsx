import React, { FC } from 'react'
import clsx from 'clsx'
import { TOCItem } from '../../TableOfContents'

import styles from './index.module.scss'

export type FunctionsItemType = {
  title: string
  titleRender?: (title: string) => React.ReactNode
  tags?: string[]
  content?: string | React.ReactNode
  isProgressBar?: boolean
  className?: string
}

const TagItem = ({ tag }: { tag: string }) => <div className={clsx(styles.tagItem)}>{tag}</div>

export const FunctionsItem: FC<FunctionsItemType> = ({
  title,
  titleRender,
  tags,
  content,
  isProgressBar,
  className,
}) => (
  <TOCItem
    data-is-progress-bar={isProgressBar}
    id={encodeURIComponent(title.toLowerCase().replaceAll(' ', '_'))}
    titleInTOC={title}
    className={clsx(styles.functionsItem, className)}
  >
    <div className={clsx(styles.titleWrap)}>
      <div className={clsx(styles.title)}>{titleRender ? titleRender(title) : title}</div>
      <div className={clsx(styles.tags)}>
        {tags?.map((tag, index) => (
          <TagItem tag={tag} key={index} />
        ))}
      </div>
    </div>
    <div className={clsx(styles.content)}>{content}</div>
  </TOCItem>
)
