import type { FC } from 'react'
import clsx from 'clsx'
import { StyledLink } from 'src/components/StyledLink'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import type { LastAuthor } from '../../../utils/github'

import styles from './index.module.scss'

export type InfoType = {
  info: string | React.ReactNode
  author: LastAuthor | null
  editLink?: string
  className?: string
  onContributorsButtonClick?: () => void
}

export const Info: FC<InfoType> = ({ info, author, className, onContributorsButtonClick }) => {
  const [t] = useTranslation(['common'])

  const ContributorsButton = () => (
    <button onClick={onContributorsButtonClick} className={styles.contributorsButton}>
      {t('see_contributors')}
    </button>
  )

  return (
    <div className={clsx(styles.info, className)}>
      <p className={styles.content}>{info}</p>
      <div className={styles.editorWrap}>
        <div className={styles.avatarAndEditorInfo}>
          <Image className={styles.avatar} src={author?.avatar ?? ''} width={45} height={45} alt="avatar" />
          <div className={clsx(styles.nameAndTime)}>
            {author ? (
              <div>
                <span className={clsx(styles.lastEdit)}>Last edit: </span>
                <StyledLink href={author.github} colored underline>{`@${author.username}`}</StyledLink>
                <div className={clsx(styles.timeString)}>{new Date(author?.editTime).toDateString()}</div>
              </div>
            ) : null}
          </div>
        </div>

        <ContributorsButton />
      </div>
    </div>
  )
}
