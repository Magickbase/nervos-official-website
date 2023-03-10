import React, { ComponentProps, FC } from 'react'

import styles from './index.module.scss'

export type HeaderType = ComponentProps<'div'> & {
  title: string | React.ReactNode
  floatIcons?: React.ReactNode
}

export const Header: FC<HeaderType> = ({ title, floatIcons }) => {
  return (
    <div className={styles.headerContent}>
      <div className={styles.title}>
        {title}
        <div className={styles.floatIcons}>{floatIcons}</div>
      </div>
    </div>
  )
}
