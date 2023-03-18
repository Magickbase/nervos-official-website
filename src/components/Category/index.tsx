import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import styles from './index.module.scss'

const Category: FC<{ category: string }> = ({ category }) => {
  const [t] = useTranslation(['blogs'])
  const c = (category.split(',')[0] ?? '').toLowerCase()
  return (
    <div data-type={c} className={styles.container}>
      {t(c)}
    </div>
  )
}
export default Category
