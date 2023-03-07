import { ComponentProps, FC } from 'react'
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

export const headerHeight = Number(styles.headerHeight)

export type HeaderProps = ComponentProps<'div'>

export const Header: FC<HeaderProps> = props => {
  const { className, ...divProps } = props

  return (
    <div className={clsx(styles.header, className)} {...divProps}>
      <MenuPopover />
      <LogoIcon />
      <LanguagePopover
        languages={[
          { name: 'English', localeName: 'en' },
          { name: '中文', englishName: 'Chinese', localeName: 'zh' },
          { name: '한국어', englishName: 'Korean', localeName: 'ko' },
          { name: 'Türkçe', englishName: 'Turkish', localeName: 'tr' },
        ]}
      />
    </div>
  )
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
              {props.languages.map(language => (
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
              ))}
            </Popover.Panel>
          </Portal>
        </>
      )}
    </Popover>
  )
}
