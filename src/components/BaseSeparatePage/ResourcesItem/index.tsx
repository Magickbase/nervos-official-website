import React, { FC } from 'react'
import clsx from 'clsx'
import { StyledLink } from 'src/components/StyledLink'

import styles from './index.module.scss'

export type ResourcesItemType = {
  title: string
  content: string
  className?: string
}

export const ResourcesItem = ({ title, content }: ResourcesItemType) => (
  <div className={styles.resourcesItem}>
    <div className={clsx(styles.itemTitle)}>
      <StyledLink linkData={{ label: title, url: 'http://placeholder' }} isSpaced isIconed />
    </div>
    <div className={styles.itemContent}>{content}</div>
  </div>
)
