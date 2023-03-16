import type { FC } from 'react'
import { useTranslation } from 'next-i18next'
import styles from './index.module.scss'

const Category: FC<{ category: string }> = ({ category }) => {
  const [t] = useTranslation(['blogs'])
  return (
    <div data-type={category} className={styles.container}>
      {t(category)}
    </div>
  )
}
export default Category
