import { ComponentProps, FC } from 'react'
import clsx from 'clsx'
import { Popover, Portal } from '@headlessui/react'
import { useTranslation } from 'next-i18next'
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

      <LanguagePopover
        languages={[
          { name: 'English', localeName: 'en-US' },
          { name: '中文', englishName: 'Chinese', localeName: 'zh-CN' },
          { name: '한국어', englishName: 'Korean', localeName: 'en-US' },
          { name: 'Türkçe', englishName: 'Turkish', localeName: 'en-US' },
        ]}
      />
    </div>
  )
}

const LanguagePopover: FC<{
  languages: {
    name: string
    englishName?: string
    localeName: string
  }[]
}> = props => {
  const { i18n } = useTranslation()

  return (
    <Popover className={styles.languagePopover}>
      {({ close }) => (
        <>
          <Popover.Button as={'div'} className={styles.trigger}>
            <LanguageIcon />
          </Popover.Button>

          {/* Use Portal to prevent being influenced by mix-blend-mode */}
          <Portal>
            <Popover.Panel className={styles.languagePopoverContent}>
              {props.languages.map(language => (
                <div
                  key={language.name}
                  className={styles.language}
                  // TODO: Maybe it would be better to use link.
                  onClick={() => {
                    void i18n.changeLanguage(language.localeName)
                    close()
                  }}
                >
                  {language.englishName && <div className={styles.englishName}>{language.englishName}</div>}
                  <div className={styles.name}>{language.name}</div>
                </div>
              ))}
            </Popover.Panel>
          </Portal>
        </>
      )}
    </Popover>
  )
}
