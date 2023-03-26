import React, { FC } from 'react'
import clsx from 'clsx'
import { Dialog } from '@headlessui/react'
import { StyledLink } from 'src/components/StyledLink'
import Image from 'next/image'
import type { Author } from '../../../utils/github'

import styles from './index.module.scss'

type ContributorsDialogType = {
  contributors?: Array<Author>
  status: boolean
  author?: Author
  onClose: () => void
}

const Contributor: FC<{ author: Author }> = ({ author }) => (
  <div className={styles.avatarAndLink}>
    <Image className={styles.avatar} width={45} height={45} alt="avatar" src={author?.avatar ?? ''} />
    <StyledLink
      linkData={{ label: author?.username ? `@${author.username}` : '', url: author?.github }}
      isColored
      isIconed
      isUnderlined
      isNewTab
    />
  </div>
)

export const ContributorsDialog: FC<ContributorsDialogType> = ({ contributors, status, onClose }) => {
  return (
    <Dialog className={clsx(styles.infoDialog)} open={status} onClose={onClose}>
      <Dialog.Panel className={styles.panel}>
        <div className={styles.title}>Contributors.</div>
        <p>
          As a completely decentralized, open, and permissionless ecosystem, Nervos attributes all its growth and
          success to its contributors.
        </p>
        <p>To everyone who&apos;s contributed, we thank you from the bottom of our hearts. You are our lifeblood.</p>
        <div className={styles.avatarWrap}>
          {contributors?.map((c, index) => (
            <Contributor author={c} key={index} />
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
