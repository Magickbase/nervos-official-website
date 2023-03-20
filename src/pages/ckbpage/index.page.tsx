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
const editor = { id: '@neon.bit' }

const functions = [
  {
    title: 'CKB Supply and Issuance.',
    tags: ['TOKEN', 'SUPPLY', 'MINERS', 'REWARD', 'DAO'],
    content: (
      <>
        CKB token issuance includes an initial supply of 33.6 billion coins (of which 8.4 billion was burned at launch),
        a base issuance of 33.6 billion (which halves every four years), and a fixed secondary issuance of 1.344 billion
        per year. Check out the detailed CKB supply and issuance information{' '}
        <StyledLink isColored isUnderlined isIconed linkData={{ label: 'here', url: 'http://placeholder' }} />.
        <p>02/14/2023</p>
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
          <StyledLink isColored isUnderlined isIconed linkData={{ label: 'Nervos DAO', url: 'http://placeholder' }} />
          &nbsp; to seek shelter from inflation of secondary issuance, for them CKB is effectively a “hard-capped”
          asset.
        </div>
        Learn more about tokenomics via this&nbsp;
        <StyledLink isColored isUnderlined isIconed linkData={{ label: 'video', url: 'http://placeholder' }} />
        &nbsp;or the&nbsp;
        <StyledLink
          isColored
          isUnderlined
          isIconed
          linkData={{ label: 'CKB tokenomics paper', url: 'http://placeholder' }}
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
        <StyledLink isColored isUnderlined isIconed linkData={{ label: 'exchanges', url: 'http://placeholder' }} />
        &nbsp;. However, keeping it there is risky, so we recommend moving it to a non-custodial cryptocurrency &nbsp;
        <StyledLink isColored isUnderlined isIconed linkData={{ label: 'wallet', url: 'http://placeholder' }} />
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
