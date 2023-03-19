import React, { FC } from 'react'
import clsx from 'clsx'

import styles from './index.module.scss'

export type PositionsType = {
  positionsData: {
    positions: {
      itemTitle: string
      itemContent: string
    }[]
    positionsTitle: string
  }

  className?: string
}

export const Positions: FC<PositionsType> = ({ positionsData: { positions, positionsTitle }, className }) => {
  return (
    <div className={clsx(styles.positionsBox, className)}>
      <div className={clsx(styles.positionsTitle)}>{positionsTitle}</div>
      <div className={clsx(styles.positionsContent)}>
        {positions.map(({ itemTitle, itemContent }, index) => (
          <div key={index} className={clsx(styles.positionsItem)}>
            <div className={clsx(styles.positionItemTitle)}>{itemTitle}</div>
            <div className={clsx(styles.positionItemContent)}>{itemContent}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
