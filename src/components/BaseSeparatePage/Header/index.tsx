import React, { FC } from 'react'
import clsx from 'clsx'

import styles from './index.module.scss'

export type HeaderType = {
  title: string | React.ReactNode
  floatIcons?: React.ReactNode
  className?: string
}

export const Header: FC<HeaderType> = ({ title, floatIcons, className }) => {
  return (
    <div className={clsx(styles.headerContent, className)}>
      <div className={styles.title}>
        {title}
        {floatIcons}
      </div>
    </div>
  )
}
