import { type NextPage } from 'next'
import clsx from 'clsx'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { Page } from 'src/components/Page'
import { StyledLink } from 'src/components/StyledLink'
import Embellished from './embellished.svg'

import presets from '../../styles/presets.module.scss'
import styles from './index.module.scss'

import { CkbPageFloatIconGroup, DataPieIcon } from './icons'

const title = <div>1 CKB = 1 Byte.</div>
const description = `CKByte (CKB) is Nervos' native coin. One CKB allows an owner to store one byte of data on the Common Knowledge Base blockchain and pay transaction fees.`
const info = `As an open-source community-driven initiative, we welcome your input and encourage you to suggest new topics, add content, and provide examples where you believe it could be helpful.`
const editor = { id: '@neon.bit', avatar: 'https://avatars.githubusercontent.com/u/22511289?s=96&v=4' }

const functions = [
  {
    title: 'CKB Supply and Issuance.',
    tags: ['TOKEN', 'SUPPLY', 'MINERS', 'REWARD', 'DAO'],
    content: (
      <>
        CKB token issuance includes an initial supply of 33.6 billion coins (of which 8.4 billion was burned at launch),
        a base issuance of 33.6 billion (which halves every four years), and a fixed secondary issuance of 1.344 billion
        per year. Check out the detailed CKB supply and issuance information{' '}
        <StyledLink
          linkData={{
            label: 'here',
            url: 'https://medium.com/@m.quinn/a-detailed-description-of-nervos-ckb-supply-and-issuance-1d55c4b101f9',
          }}
          isNewTab
          isColored
          isUnderlined
          isIconed
        />
        .<p>02/14/2023</p>
        <DataPieIcon />
        <p>
          When miners mine a block, they&apos;re rewarded CKB from two sources: the base and secondary issuance. The
          amount they receive from secondary issuance is based on state occupation. If half of the CKB in circulation
          were used to store state, the miners would receive half of the secondary issuance reward.
        </p>
        <p>
          When Nervos&apos; base issuance eventually ends, miners will keep receiving &quot;state rent&quot; income
          that&apos;s independent of transaction demand. This design ensures that miners are incentivized to secure the
          blockchain long-term.
        </p>
        <div className="oneLineGap">
          Long term holders can lock their CKB in the &nbsp;
          <StyledLink
            linkData={{ label: 'Nervos DAO', url: 'https://medium.com/nervosnetwork/nervos-dao-explained-95e33898b1c' }}
            isNewTab
            isColored
            isUnderlined
            isIconed
          />
          &nbsp; to seek shelter from inflation of secondary issuance, for them CKB is effectively a “hard-capped”
          asset.
        </div>
        Learn more about tokenomics via this&nbsp;
        <StyledLink
          linkData={{ label: 'video', url: 'https://www.youtube.com/watch?v=Ed-s-iCZDrw' }}
          isNewTab
          isColored
          isUnderlined
          isIconed
        />
        &nbsp;or the&nbsp;
        <StyledLink
          linkData={{
            label: 'CKB tokenomics paper',
            url: 'https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md',
          }}
          isNewTab
          isColored
          isUnderlined
          isIconed
        />
        &nbsp;.
      </>
    ),
  },
  {
    title: 'How do I get CKB?',
    tags: ['EXCHANGES', 'WALLET'],
    content: (
      <>
        You can buy or sell CKB using cryptocurrency&nbsp;
        <StyledLink
          linkData={{ label: 'exchanges', url: 'https://docs.nervos.org/docs/basics/guides/mining-ckb/' }}
          isNewTab
          isColored
          isUnderlined
          isIconed
        />
        &nbsp;. However, keeping it there is risky, so we recommend moving it to a non-custodial cryptocurrency &nbsp;
        <StyledLink isColored isUnderlined linkData={{ label: 'wallet', url: '/wallets' }} />
        &nbsp;.
      </>
    ),
  },
]

const CkbPage: NextPage = () => {
  const floatIcons = (
    <div className={styles.icons}>
      <CkbPageFloatIconGroup />
    </div>
  )

  return (
    <Page className={clsx(presets.themeLight)}>
      <BaseSeparatePage
        embellishedElements={[
          {
            content: <Embellished width={940} height={503} style={{ transform: 'rotateX(180deg)' }} />,
            top: 360,
            right: 518,
          },
          { content: <Embellished width={940} height={503} />, top: 292, left: 142 },
        ]}
        editLink="https://github.com/Magickbase/nervos-official-website/blob/develop/src/pages/ckbpage/index.page.tsx"
        title={title}
        floatIcons={floatIcons}
        description={description}
        info={info}
        editor={editor}
        functions={functions}
      />
    </Page>
  )
}

export default CkbPage
