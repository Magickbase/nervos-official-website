import React, { FC } from 'react'
import clsx from 'clsx'

import styles from './index.module.scss'

export type DescriptionType = {
  description: string | React.ReactNode
  className?: string
}

export const Description: FC<DescriptionType> = ({ description, className }) => {
  return (
    <div className={clsx(styles.descriptionContent, className)}>
      <p className={styles.content}>{description}</p>
    </div>
  )
}
