import { GetServerSideProps, type NextPage } from 'next'
import clsx from 'clsx'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { Page } from 'src/components/Page'

import presets from '../../styles/presets.module.scss'
import styles from './index.module.scss'

const Developers: NextPage = () => {
  const floatIcons = <>icons</>
  const title = 'Build on hardware, not software.'

  return (
    <Page>
      {({ renderHeader, renderFooter }) => (
        <>
          <div className={styles.blendModeHeader}>{renderHeader()}</div>
          <BaseSeparatePage title={title} floatIcons={floatIcons} />
          <div className={clsx(styles.footer, presets.themeNight)}>{renderFooter()}</div>
        </>
      )}
    </Page>
  )
}

export default Developers
