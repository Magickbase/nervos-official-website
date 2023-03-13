import React, { FC, useEffect } from 'react'
import clsx from 'clsx'
// import Image from 'next/image'

import styles from './index.module.scss'

export type InfoType = {
  info: string | React.ReactNode
  editor: {
    id: string
  }
  className?: string
}

export const Info: FC<InfoType> = ({ info, editor, className }) => {
  const { id } = editor
  const time = new Date().toDateString()

  const ContributorsButton = () => (
    <button onClick={() => alert('SEE CONTRIBUTORS')} className={styles.contributorsButton}>
      SEE CONTRIBUTORS
    </button>
  )

  useEffect(() => {
    // TODO: query editor Info
  }, [id])

  return (
    <div className={clsx(styles.info, className)}>
      <p className={styles.content}>{info}</p>
      <div className={styles.editorWrap}>
        <div className={styles.avatarAndEditorInfo}>
          <img
            src="https://img0.baidu.com/it/u=981218435,2998857702&fm=253&fmt=auto&app=120&f=JPEG?w=1400&h=675"
            alt="avatar"
          />
          <div className={clsx(styles.nameAndTime)}>
            <div>
              <span className={clsx(styles.lastEdit)}>Last edit: </span> <a href="http:placeholder">{id}</a>
            </div>
            <div className={clsx(styles.timeString)}>{time}</div>
          </div>
        </div>

        <ContributorsButton />
      </div>
    </div>
  )
}
