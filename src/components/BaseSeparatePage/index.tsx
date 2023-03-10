import clsx from 'clsx'
import { ComponentProps, FC } from 'react'
import { Header, HeaderType } from './components/Header'
import styles from './index.module.scss'

export type BaseSeparatePageType = ComponentProps<'div'> & HeaderType

export const BaseSeparatePage: FC<BaseSeparatePageType> = props => {
  const { className, title, floatIcons, ...rest } = props

  return (
    <div className={clsx(styles.footer, className)} {...rest}>
      <div>
        <Header title={title} floatIcons={floatIcons} />
      </div>
      <div>Description</div>
      <div>Info</div>
      <div className={styles.bottom}>Functions</div>
    </div>
  )
}
