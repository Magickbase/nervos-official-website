import { ComponentProps, FC } from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'
import MenuIcon from './menu.svg'
import LogoIcon from './logo.svg'
import LanguageIcon from './language.svg'

export const headerHeight = Number(styles.headerHeight)

export type HeaderProps = ComponentProps<'div'>

export const Header: FC<HeaderProps> = props => {
  const { className, ...divProps } = props

  return (
    <div className={clsx(styles.header, className)} {...divProps}>
      <div className={styles.menu}>
        <MenuIcon />
        <span className={styles.text}>MENU</span>
      </div>
      <LogoIcon />
      <LanguageIcon className={styles.language} />
    </div>
  )
}
