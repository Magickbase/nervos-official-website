import { FC, useMemo } from 'react'
import { formatNumber } from '../../../utils/number'
import { api } from '../../../utils/api'
import styles from './index.module.scss'
import PlayIcon from './play.svg'
import BackIcon from './back.svg'
import StopIcon from './stop.svg'
import PlusIcon from './plus.svg'
import MinusIcon from './minus.svg'
import RandomizeIcon from './randomize.svg'
import InfoIcon from './info.svg'

export const SlideFooter: FC<{ isFirstSlide?: boolean }> = props => {
  return (
    <div className={styles.slideFooter}>
      <LiveMetrics />
      <div className={styles.scrollTip}>
        {props.isFirstSlide && <span>Scroll Down</span>}
        <div className={styles.verticalLine} />
      </div>
      <div className={styles.gameControl}>
        <PlayIcon />
        <BackIcon />
        <StopIcon />
        <PlusIcon />
        <MinusIcon />
        <RandomizeIcon />
        <InfoIcon />
      </div>
    </div>
  )
}

const LiveMetrics: FC = () => {
  const liveMetricsQuery = api.ckb.liveMetrics.useQuery()
  const { liveCells, stored, dao } = liveMetricsQuery.data ?? {}
  const dataList = useMemo(
    () => [
      { name: 'Live Cells', value: liveCells },
      { name: 'Common Knowledge Stored', value: stored },
      { name: 'CKB in Nervos DAO', value: dao },
    ],
    [dao, liveCells, stored],
  )

  return (
    <div className={styles.liveMetrics}>
      <div className={styles.title}>
        <i className={styles.dot} />
        <span className={styles.text}>LIVE METRICS</span>
      </div>

      {dataList.map(({ name, value }) => (
        <div key={name} className={styles.data}>
          <div className={styles.name}>{name}</div>
          <div className={styles.value}>{value == null ? 'loading' : formatNumber(value)}</div>
        </div>
      ))}
    </div>
  )
}
