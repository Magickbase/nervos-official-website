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
    url: 'http://placeholder',
    content:
      'Build Club is an incubation program to help developers and entrepreneurs to launch Nervos dApps, tooling or infrastructure on Nervos.',
  },
  {
    title: 'Trailblazers',
    url: 'http://placeholder',
    content:
      'Nervos Trailblazers is a program supporting individuals going above and beyond to support the growth of the Nervos Network through content and community organization.',
  },
  {
    title: 'Grants Program',
    url: 'http://placeholder',
    content:
      'Nervos Grants Program was created to empower innovation and development of infrastructure of the Nervos network and to support the growth of a diverse and thriving ecosystem.',
  },
]
const supports2 = [
  {
    title: 'Nervos Docs',
    url: 'https://docs.nervos.org/',
    content: 'Foundational information about Nervos and technical reference materials.',
  },
  {
    title: 'Developer Training Course',
    url: 'http://placeholder',
    content: 'Foundational information about Nervos and technical reference materials.',
  },
  {
    title: 'RFCs',
    url: 'https://github.com/nervosnetwork/rfcs',
    content:
      'For anyone who is interested in making contributions to protocol improvements and standards, join the discussion and participate in the RFC process on Github.',
  },
  {
    title: 'Nervos Talk Forum',
    url: 'https://talk.nervos.org/',
    content: 'For the community to participate and discuss developments on Nervos.',
  },
  {
    title: 'Build Club',
    url: 'http://placeholder',
    content: 'Build Club provides support for teams and individuals who would like to launch a new project on Nervos.',
  },
  {
    title: 'Start with Nervos',
    url: 'http://placeholder',
    content:
      'Documentation focused on the EVM-equivalent Godwoken network, the easiest way to launch a dApp on Nervos!',
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
        {supports1?.map(({ title, url, content }, index) => (
          <ResourcesItem title={title} titleLink={url} content={content} key={index} />
        ))}
      </div>
      <div className={clsx(styles.supportsItemParticipantsGroup)}>
        <div className={clsx(styles.supportsItemParticipantsWrap)}>
          <div className={clsx(styles.supportsItemParticipantsTitle)}>Resources for Participants.</div>
          <div className={clsx(styles.supportsItemParticipantsContent)}>
            Explore resources for participants within the community to drive the advancement of Nervos.
          </div>
        </div>
        {supports2?.map(({ title, url, content }, index) => (
          <ResourcesItem title={title} titleLink={url} content={content} key={index} />
        ))}
      </div>
    </div>
  )
}
