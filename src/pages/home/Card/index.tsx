import clsx from 'clsx'
import { FC, PropsWithChildren, ReactNode } from 'react'
import { DISABLE_CGOL_MOUSE_CONTROLLER } from 'src/components/ConwayGameOfLife'
import styles from './index.module.scss'

export const Card: FC<
  PropsWithChildren<{
    title: ReactNode
    actions: ReactNode
  }>
> = props => {
  return (
    <div className={styles.card}>
      <div className={clsx(styles.title, DISABLE_CGOL_MOUSE_CONTROLLER)}>{props.title}</div>
      <div className={clsx(styles.content, DISABLE_CGOL_MOUSE_CONTROLLER)}>{props.children}</div>
      <div className={clsx(styles.actions, DISABLE_CGOL_MOUSE_CONTROLLER)}>{props.actions}</div>
    </div>
  )
}
