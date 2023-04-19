import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'
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

export const Supports: FC<ResourcesType> = ({ className }) => {
  const [t] = useTranslation('foundation')
  const supports1 = [
    {
      title: t('ecosystem.build_club.title'),
      url: 'https://www.buildclub.xyz/',
      content: t('ecosystem.build_club.description'),
    },
    {
      title: t('ecosystem.trailblazers.title'),
      url: 'https://www.nervos.org/trailblazer',
      content: t('ecosystem.trailblazers.description'),
    },
    {
      title: t('ecosystem.grant_program.title'),
      url: 'https://www.nervos.org/developer/grants',
      content: t('ecosystem.grant_program.description'),
    },
  ]
  const supports2 = [
    {
      title: t('resource_for_participants.nervos_docs.title'),
      url: 'https://docs.nervos.org/',
      content: t('resource_for_participants.nervos_docs.description'),
    },
    {
      title: t('resource_for_participants.developer_training_course.title'),
      url: 'https://nervos.gitbook.io/developer-training-course/',
      content: t('resource_for_participants.developer_training_course.description'),
    },
    {
      title: t('resource_for_participants.rfcs.title'),
      url: 'https://github.com/nervosnetwork/rfcs',
      content: t('resource_for_participants.rfcs.description'),
    },
    {
      title: t('resource_for_participants.forum.title'),
      url: 'https://talk.nervos.org/',
      content: t('resource_for_participants.forum.description'),
    },
    {
      title: t('resource_for_participants.build_club.title'),
      url: 'https://www.buildclub.xyz/',
      content: t('resource_for_participants.build_club.description'),
    },
    {
      title: t('resource_for_participants.start_with_godwoken.title'),
      url: 'https://docs.godwoken.io/',
      content: t('resource_for_participants.start_with_godwoken.description'),
    },
  ]
  return (
    <div className={clsx(styles.supports, className)}>
      <div className={clsx(styles.supportsItemEcosystemGroup)}>
        <div className={clsx(styles.supportsItemEcosystemWrap)}>
          <div className={clsx(styles.supportsItemEcosystemTitle)}>{t('ecosystem.title')}</div>
          <div className={clsx(styles.supportsItemEcosystemContent)}>{t('ecosystem.description')}</div>
        </div>
        {supports1?.map(({ title, url, content }, index) => (
          <ResourcesItem title={title} titleLink={url} content={content} key={index} />
        ))}
      </div>
      <div className={clsx(styles.supportsItemParticipantsGroup)}>
        <div className={clsx(styles.supportsItemParticipantsWrap)}>
          <div className={clsx(styles.supportsItemParticipantsTitle)}>{t('resource_for_participants.title')}</div>
          <div className={clsx(styles.supportsItemParticipantsContent)}>
            {t('resource_for_participants.description')}
          </div>
        </div>
        {supports2?.map(({ title, url, content }, index) => (
          <ResourcesItem title={title} titleLink={url} content={content} key={index} />
        ))}
      </div>
    </div>
  )
}
