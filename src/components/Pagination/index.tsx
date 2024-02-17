import type { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './index.module.scss'

const INDICATOR_COUNT = 5
const SIBLING_COUNT = Math.ceil((INDICATOR_COUNT - 1) / 2)

const Pagination: FC<{ pageCount: number }> = ({ pageCount }) => {
  const { query, pathname } = useRouter()

  const page = Number(query.page ?? '1')
  const prev = `${page - 1}`
  const next = `${page + 1}`
  const getHref = (p: string) => `${pathname}?${new URLSearchParams({ ...query, page: p }).toString()}`

  const indicators = Array.from({ length: INDICATOR_COUNT })
    .map((_, idx) => {
      if (page <= SIBLING_COUNT) return idx + 1
      if (page >= pageCount - SIBLING_COUNT) return pageCount - INDICATOR_COUNT + idx + 1
      return page - SIBLING_COUNT + idx
    })
    .filter(i => i > 0 && i <= pageCount)

  return (
    <div className={styles.container}>
      <Link href={getHref(prev)} className={styles.prev} data-disabled={+prev <= 0}>
        <img src="/images/left.svg" alt="prev" />
      </Link>
      {indicators.map(i => (
        <Link key={i} href={getHref(i.toString())} className={styles.indicator} data-active={page === i}>
          {i}
        </Link>
      ))}
      <Link href={getHref(next)} className={styles.next} data-disabled={+next > pageCount}>
        <img src="/images/left.svg" alt="next" />
      </Link>
    </div>
  )
}
export default Pagination
