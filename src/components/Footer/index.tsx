import clsx from 'clsx'
import { ComponentProps, FC } from 'react'
import { useTranslation } from 'next-i18next'
import { FooterMedia } from './components/FooterMedia'
import { FooterLinkGroup, FooterLinkGroupProps } from './components/FooterLinkGroup'

import styles from './index.module.scss'
import LogoIcon from './logo.svg'
import { StyledLink } from '../StyledLink'

export type FooterProps = ComponentProps<'div'> & { limitMaxWidth?: number | false }

export const Footer: FC<FooterProps> = props => {
  const [t] = useTranslation('common', { keyPrefix: 'navigation' })
  const { limitMaxWidth = 1200, className, ...divProps } = props

  const footerLinkGroups: FooterLinkGroupProps[] = [
    {
      title: t('discover'),
      links: [
        { label: 'CKB', url: '/ckbpage' },
        { label: t('mining'), url: '/mining' },
        { label: t('wallets'), url: '/wallets' },
        { label: t('wiki'), url: 'https://www.wikiwand.com/en/Nervos_Network' },
        { label: t('press_kit'), url: 'https://projects.invisionapp.com/boards/WK3VAZJUYCM/' },
      ],
    },
    {
      title: (
        <StyledLink className={styles.titleLink} href="/developers">
          {t('developers')}
        </StyledLink>
      ),
      links: [
        { label: t('documentation'), url: 'https://docs.nervos.org/' },
        { label: t('github'), url: 'https://github.com/nervosnetwork/' },
        { label: t('explorer'), url: 'https://explorer.nervos.org/' },
      ],
    },
    {
      title: t('ecosystem'),
      links: [
        { label: t('cryptape'), url: 'https://cryptape.com/' },
        { label: t('godwoken'), url: 'https://godwoken.com/' },
        { label: t('nervina_labs'), url: 'https://nervina.io/' },
        { label: t('tunnel_vision_labs'), url: 'https://tunnelvisionlabs.xyz/' },
        { label: t('axon'), url: 'https://axonweb3.io/' },
        { label: t('.bit'), url: 'https://www.did.id/' },
        { label: t('magickbase'), url: 'https://github.com/Magickbase/' },
      ],
    },
    {
      title: (
        <StyledLink className={styles.titleLink} href="/community">
          {t('community')}
        </StyledLink>
      ),
      links: [
        { label: t('community_fund_dao'), url: 'https://dao.ckb.community/' },
        { label: t('nervos_talk_forum'), url: 'https://talk.nervos.org/' },
        { label: t('rfcs'), url: 'https://github.com/nervosnetwork/rfcs/' },
      ],
    },
    {
      title: (
        <StyledLink className={styles.titleLink} href="/learn">
          {t('learn')}
        </StyledLink>
      ),
      links: [
        { label: t('knowledge_base'), url: '/knowledge-base' },
        { label: t('medium'), url: 'https://medium.com/nervosnetwork' },
        { label: t('youtube'), url: 'https://www.youtube.com/c/NervosNetwork' },
      ],
    },
  ]

  return (
    <div className={clsx(styles.footer, className)} {...divProps}>
      <div
        className={styles.content}
        style={{
          // You must use unset instead of the empty string, otherwise will error on hydration.
          maxWidth: limitMaxWidth === false ? 'unset' : limitMaxWidth,
        }}
      >
        <div className={styles.guide}>
          <div className={styles.guideLinks}>
            {footerLinkGroups?.map(({ title, links }, index) => (
              <FooterLinkGroup title={title} links={links} key={index} />
            ))}
          </div>

          <div className={styles.guideMedias}>
            <FooterMedia />
          </div>
        </div>

        <div className={styles.bottom}>
          <LogoIcon />
          <div className={styles.copyright}>
            ©Nervos is an open-source project initiated by the <span className={styles.bold}>Nervos Foundation</span>.
            All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}
