import React, { FC, useEffect } from 'react'
import clsx from 'clsx'
import { StyledLink } from 'src/components/StyledLink'
import Image from 'next/image'

import styles from './index.module.scss'

export type InfoType = {
  info: string | React.ReactNode
  editor?: {
    id: string
    avatar: string
  }
  editLink?: string
  className?: string
}

export const Info: FC<InfoType> = ({ info, editor, editLink, className }) => {
  const time = new Date().toDateString()

  const ContributorsButton = () => (
    <button onClick={() => alert('SEE CONTRIBUTORS')} className={styles.contributorsButton}>
      SEE CONTRIBUTORS
    </button>
  )

  useEffect(() => {
    // TODO: query editor Info
  }, [editor?.id])

  return (
    <div className={clsx(styles.info, className)}>
      <p className={styles.content}>{info}</p>
      <div className={styles.editorWrap}>
        <div className={styles.avatarAndEditorInfo}>
          <Image className={styles.avatar} src={editor?.avatar ?? ''} width={45} height={45} alt="avatar" />
          <div className={clsx(styles.nameAndTime)}>
            <div>
              <span className={clsx(styles.lastEdit)}>Last edit: </span>
              <StyledLink
                linkData={{ label: editor?.id ?? '', url: editLink ?? '' }}
                isNewTab
                isColored
                isIconed
                isUnderlined
              />
            </div>
            <div className={clsx(styles.timeString)}>{time}</div>
          </div>
        </div>

        <ContributorsButton />
      </div>
    </div>
  )
}
