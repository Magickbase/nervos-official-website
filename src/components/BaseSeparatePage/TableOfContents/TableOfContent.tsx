import { useContext } from 'react'
import clsx from 'clsx'

import { TOCContext } from '../TableOfContents'

import styles from './index.module.scss'

const TableOfContent = () => {
  const { tocItems } = useContext(TOCContext)

  return (
    <nav aria-label="Table of contents" style={{ marginTop: '20px' }}>
      {tocItems.map(tocItem => (
        <div
          key={tocItem.id}
          className={clsx(styles.listItem, styles.progressBorder, { [styles.active ?? '']: tocItem.isActive })}
        >
          <a
            href={`#${tocItem.id}`}
            onClick={e => {
              e.preventDefault()

              document.getElementById(`${tocItem.id}`)?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            {/* if the element is not a wraped component ,it could be heading.title */}
            {tocItem.title}
          </a>
        </div>
      ))}
    </nav>
  )
}

export default TableOfContent
