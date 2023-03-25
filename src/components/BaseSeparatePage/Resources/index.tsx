import React, { FC } from 'react'
import clsx from 'clsx'

import styles from './index.module.scss'
import { ResourcesItem } from '../ResourcesItem'

export type ResourcesItemType = {
  title: string
  content: string
  className?: string
  link: string
}

export type ResourcesType = {
  resourceData: {
    resourceTitle: string
    resources: ResourcesItemType[]
  }
  className?: string
}

export const Resources: FC<ResourcesType> = ({ resourceData: { resourceTitle, resources }, className }) => {
  return (
    <div className={clsx(styles.resources, className)}>
      <div className={clsx(styles.title)}>{resourceTitle}</div>
      <div className={clsx(styles.resourceItemGroup)}>
        {resources?.map(({ title, content, link }, index) => (
          <ResourcesItem title={title} titleLink={link} content={content} key={index} />
        ))}
      </div>
    </div>
  )
}
