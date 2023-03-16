import { ComponentProps, FC, useMemo } from 'react'
import clsx from 'clsx'
import { Popover, Portal } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.scss'
import ArrowIcon from './arrow.svg'
import ObliqueArrowIcon from './oblique_arrow.svg'
import ThinArrowIcon from './thin_arrow.svg'
import CodeIcon from './code.svg'
import CommunityIcon from './community.svg'
import CircleIcon from './circle.svg'
import LearnIcon from './learn.svg'
import MenuIcon from './menu.svg'
import LogoIcon from './logo.svg'
import LanguageIcon from './language.svg'
import { useIsMobile } from '../../hooks'
import { isClient } from '../../utils'

const headerHeightVarName = (styles.headerHeightVarName ?? '').replaceAll('"', '')
const defaultHeaderHeight = parseFloat((styles.defaultHeaderHeight ?? '').replace('px', ''))

export type HeaderProps = ComponentProps<'div'>

export const Header: FC<HeaderProps> = props => {
  const { className, ...divProps } = props

  return (
    <div className={clsx(styles.header, className)} {...divProps}>
      <MenuPopover />
      <Link className={styles.logo} href="/">
        <LogoIcon />
      </Link>
      <LanguagePopover
        languages={[
          { name: 'English', localeName: 'en' },
          // TODO: This is because there is currently no full i18n translation support,
          // so switching to other languages is temporarily disabled.
          { name: '中文', englishName: 'Chinese', localeName: 'zh', disabled: true },
          { name: '한국어', englishName: 'Korean', localeName: 'ko', disabled: true },
          { name: 'Türkçe', englishName: 'Turkish', localeName: 'tr', disabled: true },
        ]}
      />
    </div>
  )
}

export function useHeaderHeight(): number {
  const isMobile = useIsMobile()
  return useMemo(() => {
    if (!isClient()) return defaultHeaderHeight

    const cssValue = getComputedStyle(document.documentElement).getPropertyValue(headerHeightVarName)
    // TODO: You can use CSSUnitValue instead, but it requires polyfill
    return parseFloat(cssValue.replace('px', ''))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile])
}

const MenuPopover: FC = () => {
  return (
    <Popover className={styles.menuPopover}>
      {({ close }) => (
        <>
          <Popover.Button as={'div'} className={styles.trigger}>
            <MenuIcon />
            <span className={styles.text}>MENU</span>
          </Popover.Button>

          {/* Use Portal to prevent being influenced by mix-blend-mode */}
          <Portal>
            <Popover.Panel className={styles.menuPopoverContent}>
              <div className={styles.menu}>
                <div className={styles.title}>
                  <CodeIcon />
                  Developers
                  <ArrowIcon />
                </div>
                <div className={styles.links}>
                  <div className={styles.link}>
                    Docs <ObliqueArrowIcon />
                  </div>
                  <div className={styles.link}>
                    Github <ObliqueArrowIcon />
                  </div>
                  <div className={styles.link}>
                    Explorer <ObliqueArrowIcon />
                  </div>
                </div>
              </div>

              <div className={styles.menu}>
                <div className={styles.title}>
                  <CommunityIcon />
                  Community
                  <ArrowIcon />
                </div>
                <div className={styles.links}>
                  <div className={styles.link}>
                    <div>
                      Community
                      <br />
                      Fund DAO
                    </div>
                    <ObliqueArrowIcon />
                  </div>
                  <div className={styles.link}>
                    Forum <ObliqueArrowIcon />
                  </div>
                  <a
                    href="https://github.com/nervosnetwork/rfcs"
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    RFCs <ObliqueArrowIcon />
                  </a>
                </div>
              </div>

              <div className={styles.menu}>
                <div className={styles.title}>
                  <CircleIcon />
                  CKB <span className={styles.ckbHint}>(Token)</span>
                  <ArrowIcon />
                </div>
                <div className={styles.links}>
                  <div className={styles.link}>
                    Mining <ThinArrowIcon />
                  </div>
                  <div className={styles.link}>
                    Wallets <ThinArrowIcon />
                  </div>
                </div>
              </div>

              <div className={styles.menu}>
                <Link className={styles.title} href="/learn">
                  <LearnIcon />
                  Learn
                  <ArrowIcon />
                </Link>
                <div className={styles.links}>
                  <div className={styles.link}>
                    Knowledge Base <ThinArrowIcon />
                  </div>
                  <div className={styles.link}>
                    Blog <ObliqueArrowIcon />
                  </div>
                  <div className={styles.link}>
                    Medium <ObliqueArrowIcon />
                  </div>
                  <div className={styles.link}>
                    Youtube <ObliqueArrowIcon />
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Portal>
        </>
      )}
    </Popover>
  )
}

const LanguagePopover: FC<{
  languages: {
    name: string
    englishName?: string
    localeName: string
    disabled?: boolean
  }[]
}> = props => {
  const router = useRouter()
  const { pathname, query } = router

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
              {props.languages.map(language =>
                language.disabled ? (
                  <div key={language.name} className={clsx(styles.language, styles.disabled)} title="Coming soon">
                    {language.englishName && <div className={styles.englishName}>{language.englishName}</div>}
                    <div className={styles.name}>{language.name}</div>
                  </div>
                ) : (
                  <Link
                    key={language.name}
                    className={styles.language}
                    href={{ pathname, query }}
                    locale={language.localeName}
                    onClick={() => close()}
                  >
                    {language.englishName && <div className={styles.englishName}>{language.englishName}</div>}
                    <div className={styles.name}>{language.name}</div>
                  </Link>
                ),
              )}
            </Popover.Panel>
          </Portal>
        </>
      )}
    </Popover>
  )
}
