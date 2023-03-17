import React, { FC } from 'react'
import clsx from 'clsx'
import { StyledLink } from 'src/components/StyledLink'

import styles from './index.module.scss'

export type ResourcesItemType = {
  title: string
  content: string
  className?: string
}

export type ResourcesType = {
  resourceData: {
    resourceTitle: string
    resources: ResourcesItemType[]
  }
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

export const Resources: FC<ResourcesType> = ({ resourceData: { resourceTitle, resources }, className }) => {
  return (
    <div className={clsx(styles.resources, className)}>
      <div className={clsx(styles.title)}>{resourceTitle}</div>
      <div className={clsx(styles.resourceItemGroup)}>
        {resources?.map(({ title, content }, index) => (
          <ResourcesItem title={title} content={content} key={index} />
        ))}
      </div>
    </div>
  )
}
