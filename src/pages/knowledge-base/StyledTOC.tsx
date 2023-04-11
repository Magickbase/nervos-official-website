import { FC, useContext } from 'react'
import clsx from 'clsx'
import { TOCContext } from '../../components/TableOfContents'

import styles from './knowledgeBase.module.scss'

export const StyledTOC: FC = () => {
  const { tocItems } = useContext(TOCContext)

  return (
    <>
      <div className={styles.tocHeader}>Table of contents:</div>
      <nav aria-label="Table of contents" style={{ marginTop: '20px' }}>
        {tocItems.map(tocItem => (
          <div key={tocItem.id} className={clsx(styles.tocItem, { [styles.active ?? '']: tocItem.isActive })}>
            <a href={`#${tocItem.id}`}>{tocItem.title}</a>
          </div>
        ))}
      </nav>
    </>
  )
}
