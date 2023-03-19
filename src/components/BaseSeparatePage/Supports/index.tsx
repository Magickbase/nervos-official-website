import React, { FC } from 'react'
import clsx from 'clsx'

import styles from './index.module.scss'
import { ResourcesItem } from '../ResourcesItem'

export type ResourcesItemType = {
  title: string
  content: string
  className?: string
}

export type ResourcesType = {
  className?: string
}

const supports1 = [
  {
    title: 'Build Club',
    content:
      'Build Club is an incubation program to help developers and entrepreneurs to launch Nervos dApps, tooling or infrastructure on Nervos.',
  },
  {
    title: 'Trailblazers',
    content:
      'Nervos Trailblazers is a program supporting individuals going above and beyond to support the growth of the Nervos Network through content and community organization.',
  },
  {
    title: 'Grants Program',
    content:
      'Nervos Grants Program was created to empower innovation and development of infrastructure of the Nervos network and to support the growth of a diverse and thriving ecosystem.',
  },
]

export const Supports: FC<ResourcesType> = ({ className }) => {
  return (
    <div className={clsx(styles.supports, className)}>
      <div className={clsx(styles.supportsItemEcosystemGroup)}>
        <div className={clsx(styles.supportsItemEcosystemWrap)}>
          <div className={clsx(styles.supportsItemEcosystemTitle)}>Ecosystem Support Programs.</div>
          <div className={clsx(styles.supportsItemEcosystemContent)}>
            There are multiple programs that support development of projects which align with the Nervos Foundation’s
            vision:
          </div>
        </div>
        {supports1?.map(({ title, content }, index) => (
          <ResourcesItem title={title} content={content} key={index} />
        ))}
      </div>
    </div>
  )
}
