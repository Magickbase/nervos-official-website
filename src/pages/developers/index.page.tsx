import { type NextPage } from 'next'
import clsx from 'clsx'
import { BaseSeparatePage } from 'src/components/BaseSeparatePage'
import { Page } from 'src/components/Page'
import presets from 'src/styles/presets.module.scss'
import styles from './index.module.scss'

import { ArticlesIcon, BallsIcon, QuoteIcon, SunIcon } from './icons'
import { description, editor, functions, info, resources, title } from './constants'

const Developers: NextPage = () => {
  const floatIcons = (
    <div className={styles.icons}>
      <div className={styles.quoteIcon}>
        <QuoteIcon />
      </div>
      <SunIcon />
      <BallsIcon />
      <ArticlesIcon />
    </div>
  )

  return (
    <Page>
      {({ renderHeader, renderFooter }) => (
        <>
          <div className={clsx(styles.blendModeHeader, presets.themeLight)}>{renderHeader()}</div>
          <BaseSeparatePage
            className={clsx(presets.themeLight)}
            title={title}
            floatIcons={floatIcons}
            description={description}
            info={info}
            editor={editor}
            functions={functions}
            resources={resources}
          />
          <div className={clsx(styles.footer, presets.themeLight)}>{renderFooter()}</div>
        </>
      )}
    </Page>
  )
}

export default Developers
