import React, { FC } from 'react'
import clsx from 'clsx'
import { Dialog } from '@headlessui/react'
import { StyledLink } from 'src/components/StyledLink'
import Image from 'next/image'

import styles from './index.module.scss'

type ContributorType = {
  editor: { id: string; avatar: string }
}

type ContributorsDialogType = {
  editor: { id: string; avatar: string }
  status: boolean
  onClose: () => void
}

const Contributor: FC<ContributorType> = ({ editor }) => (
  <div className={styles.avatarAndLink}>
    <Image className={styles.avatar} width={45} height={45} alt="avatar" src={editor?.avatar ?? ''} />
    <StyledLink linkData={{ label: editor?.id ?? '', url: editor?.avatar ?? '' }} isColored isIconed isUnderlined />
  </div>
)

export const ContributorsDialog: FC<ContributorsDialogType> = ({ editor, status, onClose }) => {
  return (
    <Dialog className={clsx(styles.infoDialog)} open={status} onClose={onClose}>
      <Dialog.Panel className={styles.panel}>
        <div className={styles.title}>Contributors</div>
        <p>
          As a completely decentralized, open, and permissionless ecosystem, Nervos attributes all its growth and
          success to its contributors.
        </p>
        <p>To everyone who&apos;s contributed, we thank you from the bottom of our hearts. You are our lifeblood.</p>
        <div className={styles.avatarWrap}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Contributor editor={editor} key={index} />
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.action} onClick={onClose}>
            DONE
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}
