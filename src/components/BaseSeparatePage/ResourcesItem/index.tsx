import React from 'react'
import clsx from 'clsx'
import { StyledLink } from 'src/components/StyledLink'

import styles from './index.module.scss'

export type ResourcesItemType = {
  title: string
  titleLink?: string
  content: string
  className?: string
}

export const ResourcesItem = ({ title, titleLink, content }: ResourcesItemType) => (
  <div className={styles.resourcesItem}>
    <div className={clsx(styles.itemTitle)}>
      {titleLink != null ? (
        <StyledLink href={titleLink ?? ''} space={8}>
          {title}
        </StyledLink>
      ) : (
        title
      )}
    </div>
    <div className={styles.itemContent}>{content}</div>
  </div>
)
