import { useState } from 'react'
import clsx from 'clsx'

import useHeadingsData, { NestedHeadingtype } from './useHeadingsData'
import useIntersectionObserver from './useIntersectionObserver'

import styles from './index.module.scss'

const Headings = ({ headings, activeId }: { headings: NestedHeadingtype[]; activeId: string }) => {
  return (
    <>
      {headings?.map(heading => (
        <div key={heading.id} className={clsx(styles.listItem, heading.id === activeId ? styles.active : '')}>
          <a
            href={`#${heading.id}`}
            onClick={e => {
              e.preventDefault()

              document.getElementById(`${heading.id}`)?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            {/* if the element is not a wraped component ,it could be heading.title */}
            {heading.id}
          </a>
        </div>
      ))}
    </>
  )
}

const TableOfContent = () => {
  const [activeId, setActiveId]: [string, React.Dispatch<React.SetStateAction<string>>] = useState('')
  const { nestedHeadings } = useHeadingsData()
  useIntersectionObserver(setActiveId)

  return (
    <nav aria-label="Table of contents" style={{ marginTop: '20px' }}>
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  )
}

export default TableOfContent
