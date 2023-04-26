import { ComponentProps, FC, Fragment, useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import { Popover, Portal, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { StyledLink } from '../StyledLink'
import styles from './index.module.scss'
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
          { name: '中文', englishName: 'Chinese', localeName: 'zh', disabled: true },
          // TODO: This is because there is currently no full i18n translation support,
          // so switching to other languages is temporarily disabled.
          { name: '한국어', englishName: 'Korean', localeName: 'ko', disabled: true },
          { name: 'Español', englishName: 'Spanish', localeName: 'es', disabled: true },
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
  const [t] = useTranslation('common', { keyPrefix: 'navigation' })
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
                  <StyledLink href="/developers" className={styles.title}>
                    <CodeIcon />
                    {t('developers')}
                  </StyledLink>
                  <div className={styles.links}>
                    <StyledLink href="https://docs.nervos.org/" className={styles.link}>
                      {t('docs')}
                    </StyledLink>
                    <StyledLink href="https://github.com/nervosnetwork/" className={styles.link}>
                      {t('github')}
                    </StyledLink>
                    <StyledLink href="https://explorer.nervos.org/" className={styles.link}>
                      {t('explorer')}
                    </StyledLink>
                  </div>
                </div>

                <div className={styles.menu}>
                  <StyledLink href="/community" className={styles.title}>
                    <CommunityIcon />
                    {t('community')}
                  </StyledLink>
                  <div className={styles.links}>
                    <StyledLink href="https://dao.ckb.community/" className={styles.link}>
                      <div>
                        {t('community_fund_dao')
                          .split('\n')
                          .map(p => (
                            <div key={p}>{p}</div>
                          ))}
                      </div>
                    </StyledLink>
                    <StyledLink href="https://talk.nervos.org/" className={styles.link}>
                      {t('forum')}
                    </StyledLink>
                    <StyledLink href="https://github.com/nervosnetwork/rfcs" className={styles.link}>
                      {t('rfcs')}
                    </StyledLink>
                  </div>
                </div>

                <div className={styles.menu}>
                  <StyledLink href="/ckbpage" className={styles.title}>
                    <CircleIcon />
                    CKB <span className={styles.ckbHint}>(Token)</span>
                  </StyledLink>
                  <div className={styles.links}>
                    <StyledLink href="/mining" className={styles.link}>
                      {t('mining')}
                    </StyledLink>
                    <StyledLink href="/wallets" className={styles.link}>
                      {t('wallets')}
                    </StyledLink>
                  </div>
                </div>

                <div className={styles.menu}>
                  <StyledLink className={styles.title} href="/learn">
                    <LearnIcon />
                    {t('learn')}
                  </StyledLink>
                  <div className={styles.links}>
                    <StyledLink href="/knowledge-base" className={styles.link}>
                      {t('knowledge_base')}
                    </StyledLink>
                    <StyledLink href="https://medium.com/nervosnetwork" className={styles.link}>
                      {t('medium')}
                    </StyledLink>
                    <StyledLink href="https://www.youtube.com/c/NervosNetwork" className={styles.link}>
                      {t('youtube')}
                    </StyledLink>
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
            <Transition
              as={Fragment}
              enter={styles.enter}
              enterFrom={styles.enterFrom}
              enterTo={styles.enterTo}
              leave={styles.leave}
              leaveFrom={styles.leaveFrom}
              leaveTo={styles.leaveTo}
            >
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
            </Transition>
          </Portal>
        </>
      )}
    </Popover>
  )
}
