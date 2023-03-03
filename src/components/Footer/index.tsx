import clsx from 'clsx'
import { ComponentProps, FC } from 'react'
import styles from './index.module.scss'
import LogoIcon from './logo.svg'

export type FooterProps = ComponentProps<'div'>

export const Footer: FC<FooterProps> = props => {
  const { className, ...divProps } = props

  return (
    <div className={clsx(styles.footer, className)} {...divProps}>
      {/* TODO: Need to implement menus */}
      <div>Footer Menus</div>
      <div className={styles.bottom}>
        <LogoIcon />
        <div className={styles.copyright}>
          ©Nervos is an open-source project funded by the <span className={styles.bold}>Nervos Foundation</span>. All
          Rights Reserved.
        </div>
      </div>
    </div>
  )
}
