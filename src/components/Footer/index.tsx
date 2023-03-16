import clsx from 'clsx'
import { ComponentProps, FC } from 'react'
import { FooterMedia } from './components/FooterMedia'
import { FooterLinkGroup, FooterLinkGroupProps } from './components/FooterLinkGroup'

import styles from './index.module.scss'
import LogoIcon from './logo.svg'

export type FooterProps = ComponentProps<'div'>

export const Footer: FC<FooterProps> = props => {
  const { className, ...divProps } = props

  // Todo: the url is temporarily filled with placeholders
  const footerLinkGroups: FooterLinkGroupProps[] = [
    {
      title: 'DISCOVER',
      links: ['Mining', 'Wallets', 'Wiki', 'Press Kit'].map((item, index) => ({
        label: item,
        url: `http://placeholders${index}`,
      })),
    },
    {
      title: 'DEVELOPERS',
      links: ['Documentation', 'Github', 'Explorer'].map((item, index) => ({
        label: item,
        url: `http://placeholders${index}`,
      })),
    },
    {
      title: 'ECOSYSTEM',
      links: ['Nervos Foundation,', 'Cryptape', 'Godwoken', 'Nervina Labs', 'Tunnel Vision Labs'].map(
        (item, index) => ({
          label: item,
          url: `http://placeholders${index}`,
        }),
      ),
    },
    {
      title: 'COMMUNITY',
      links: ['Community Fund DAO', 'Nervos Talk Forum', 'RFCs'].map((item, index) => ({
        label: item,
        url: `http://placeholders${index}`,
      })),
    },
    {
      title: 'LEARN',
      links: ['Knowledge Base', 'Blog', 'Medium', 'Youtube'].map((item, index) => ({
        label: item,
        url: `http://placeholders${index}`,
      })),
    },
  ]

  return (
    <div className={clsx(styles.footer, className)} {...divProps}>
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
  )
}
