import clsx from 'clsx'
import { ComponentProps, FC } from 'react'
import { FooterMedia } from './components/FooterMedia'
import { FooterLinkGroup, FooterLinkGroupProps } from './components/FooterLinkGroup'

import styles from './index.module.scss'
import LogoIcon from './logo.svg'

export type FooterProps = ComponentProps<'div'>

export const Footer: FC<FooterProps> = props => {
  const { className, ...divProps } = props

  const footerLinkGroups: FooterLinkGroupProps[] = [
    {
      title: 'DISCOVER',
      links: [
        { label: 'Mining', url: '/mining' },
        { label: 'Wallets', url: '/wallets' },
        { label: 'Wiki', url: 'https://www.wikiwand.com/en/Nervos_Network' },
        { label: 'Press Kit', url: 'https://projects.invisionapp.com/boards/WK3VAZJUYCM/' },
      ],
    },
    {
      title: 'DEVELOPERS',
      links: [
        { label: 'Documentation', url: 'https://docs.nervos.org/' },
        { label: 'GitHub', url: 'https://github.com/nervosnetwork/' },
        { label: 'Explorer', url: 'https://explorer.nervos.org/' },
      ],
    },
    {
      title: 'ECOSYSTEM',
      links: [
        { label: 'Nervos Foundation', url: 'https://www.nervos.org/' },
        { label: 'Cryptape', url: 'https://cryptape.com/' },
        { label: 'Godwoken', url: 'https://godwoken.com/' },
        { label: 'Nervina Labs', url: 'https://nervina.io/' },
        { label: 'Tunnel Vision Labs', url: 'https://tunnelvisionlabs.xyz/' },
      ],
    },
    {
      title: 'COMMUNITY',
      links: [
        { label: 'Community Fund DAO', url: 'https://dao.ckb.community/' },
        { label: 'Nervos Talk Forum', url: 'https://talk.nervos.org/' },
        { label: 'RFCs', url: 'https://github.com/nervosnetwork/rfcs/' },
      ],
    },
    {
      title: 'LEARN',
      links: [
        /* not ready yet */
        // { label: 'Knowledge Base', url: '/' },
        { label: 'Blog', url: '/blogs' },
        { label: 'Medium', url: 'https://medium.com/nervosnetwork' },
        { label: 'Youtube', url: 'https://www.youtube.com/c/NervosNetwork' },
      ],
    },
  ]

  return (
    <div className={clsx(styles.footer, className)} {...divProps}>
      <div className={styles.content}>
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
            ©Nervos is an open-source project funded by the <span className={styles.bold}>Nervos Foundation</span>. All
            Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}
