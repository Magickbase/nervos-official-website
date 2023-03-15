import { FC, PropsWithChildren, ReactNode } from 'react'
import styles from './index.module.scss'

export const Card: FC<
  PropsWithChildren<{
    title: ReactNode
    actions: ReactNode
  }>
> = props => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.content}>{props.children}</div>
      <div className={styles.actions}>{props.actions}</div>
    </div>
  )
}
