import { ComponentProps, FC, Fragment, useMemo } from 'react'
import clsx from 'clsx'
import { Popover, Portal, Transition } from '@headlessui/react'
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
import { DISABLE_CGOL_MOUSE_CONTROLLER } from '../ConwayGameOfLife'

const headerHeightVarName = (styles.headerHeightVarName ?? '').replaceAll('"', '')
const defaultHeaderHeight = parseFloat((styles.defaultHeaderHeight ?? '').replace('px', ''))

export type HeaderProps = ComponentProps<'div'>

export const Header: FC<HeaderProps> = props => {
  const { className, ...divProps } = props

  return (
    <div className={clsx(styles.header, className)} {...divProps}>
      <MenuPopover />
      <Link className={clsx(styles.logo, DISABLE_CGOL_MOUSE_CONTROLLER)} href="/">
        <LogoIcon />
      </Link>
      <LanguagePopover
        languages={[
          { name: 'English', localeName: 'en' },
          // TODO: This is because there is currently no full i18n translation support,
          // so switching to other languages is temporarily disabled.
          { name: '中文', englishName: 'Chinese', localeName: 'zh', disabled: true },
          { name: '한국어', englishName: 'Korean', localeName: 'ko', disabled: true },
          null,
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
          <Popover.Button as={'div'} className={clsx(styles.trigger, DISABLE_CGOL_MOUSE_CONTROLLER)}>
            <MenuIcon />
            <span className={styles.text}>MENU</span>
          </Popover.Button>

          {/* Use Portal to prevent being influenced by mix-blend-mode */}
          <Portal>
            <Transition
              as={Fragment}
              enter={styles.enter}
              enterFrom={styles.enterFrom}
              enterTo={styles.enterTo}
              leave={styles.leave}
              leaveFrom={styles.leaveFrom}
              leaveTo={styles.leaveTo}
            >
              <Popover.Panel className={styles.menuPopoverContent}>
                <div className={styles.menu}>
                  <Link href="/developers" className={styles.title}>
                    <CodeIcon />
                    Developers
                    <ArrowIcon />
                  </Link>
                  <div className={styles.links}>
                    <Link
                      href="https://docs.nervos.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Docs <ObliqueArrowIcon />
                    </Link>
                    <Link
                      href="https://github.com/nervosnetwork/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Github <ObliqueArrowIcon />
                    </Link>
                    <Link
                      href="https://explorer.nervos.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Explorer <ObliqueArrowIcon />
                    </Link>
                  </div>
                </div>

                <div className={styles.menu}>
                  <Link href="/community" className={styles.title}>
                    <CommunityIcon />
                    Community
                    <ArrowIcon />
                  </Link>
                  <div className={styles.links}>
                    <Link
                      href="https://dao.ckb.community/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <div>
                        Community
                        <br />
                        Fund DAO
                      </div>
                      <ObliqueArrowIcon />
                    </Link>
                    <Link
                      href="https://talk.nervos.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Forum <ObliqueArrowIcon />
                    </Link>
                    <Link
                      href="https://github.com/nervosnetwork/rfcs"
                      className={styles.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      RFCs <ObliqueArrowIcon />
                    </Link>
                  </div>
                </div>

                <div className={styles.menu}>
                  <Link href="/ckbpage" className={styles.title}>
                    <CircleIcon />
                    CKB <span className={styles.ckbHint}>(Token)</span>
                    <ArrowIcon />
                  </Link>
                  <div className={styles.links}>
                    <Link href="/mining" className={styles.link}>
                      Mining <ThinArrowIcon />
                    </Link>
                    <Link href="/wallets" className={styles.link}>
                      Wallets <ThinArrowIcon />
                    </Link>
                  </div>
                </div>

                <div className={styles.menu}>
                  <Link className={styles.title} href="/learn">
                    <LearnIcon />
                    Learn
                    <ArrowIcon />
                  </Link>
                  <div className={styles.links}>
                    {/* not ready yet */}
                    {/* <div className={styles.link}> */}
                    {/*   Knowledge Base <ThinArrowIcon /> */}
                    {/* </div> */}
                    <Link href="/blogs" className={styles.link}>
                      Blog <ObliqueArrowIcon />
                    </Link>
                    <Link
                      href="https://medium.com/nervosnetwork"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Medium <ObliqueArrowIcon />
                    </Link>
                    <Link
                      href="https://www.youtube.com/c/NervosNetwork"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      Youtube <ObliqueArrowIcon />
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Portal>
        </>
      )}
    </Popover>
  )
}

const LanguagePopover: FC<{
  languages: ({
    name: string
    englishName?: string
    localeName: string
    disabled?: boolean
  } | null)[]
}> = props => {
  const router = useRouter()
  const { pathname, query } = router

  return (
    <Popover className={styles.languagePopover}>
      {({ close }) => (
        <>
          <Popover.Button as={'div'} className={clsx(styles.trigger, DISABLE_CGOL_MOUSE_CONTROLLER)}>
            <LanguageIcon />
          </Popover.Button>

          {/* Use Portal to prevent being influenced by mix-blend-mode */}
          <Portal>
            <Popover.Panel className={styles.languagePopoverContent}>
              {props.languages.map((language, idx) =>
                language == null ? (
                  <div key={idx} className={clsx(styles.language, styles.placeholder)} />
                ) : language.disabled ? (
                  <div key={language.name} className={clsx(styles.language, styles.disabled)}>
                    <div>
                      {language.englishName && <div className={styles.englishName}>{language.englishName}</div>}
                      <div className={styles.name}>{language.name}</div>
                    </div>
                    <div className={styles.tip}>Coming soon</div>
                  </div>
                ) : (
                  <Link
                    key={language.name}
                    className={styles.language}
                    href={{ pathname, query }}
                    locale={language.localeName}
                    onClick={() => close()}
                  >
                    <div>
                      {language.englishName && <div className={styles.englishName}>{language.englishName}</div>}
                      <div className={styles.name}>{language.name}</div>
                    </div>
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
