import { FC, useMemo } from 'react'
import { useTranslation } from 'next-i18next'
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
  const { t } = useTranslation('home', { keyPrefix: 'slide_footer' })

  return (
    <div className={styles.slideFooter}>
      <LiveMetrics />
      <div className={styles.scrollTip}>
        {props.isFirstSlide && <span>{t('scroll_down')}</span>}
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
  const { t } = useTranslation('home', { keyPrefix: 'slide_footer' })

  const liveMetricsQuery = api.ckb.liveMetrics.useQuery()
  const { liveCells, stored, dao } = liveMetricsQuery.data ?? {}
  const dataList = useMemo(
    () => [
      { name: t('live_cells'), value: liveCells },
      { name: t('common_knowledge_stored'), value: stored },
      { name: t('ckb_in_nervos_dao'), value: dao },
    ],
    [dao, liveCells, stored, t],
  )

  return (
    <div className={styles.liveMetrics}>
      <div className={styles.title}>
        <i className={styles.dot} />
        <span className={styles.text}>{t('live_metrics')}</span>
      </div>

      {dataList.map(({ name, value }) => (
        <div key={name} className={styles.data}>
          <div className={styles.name}>{name}</div>
          <div className={styles.value}>{value == null ? t('loading') : formatNumber(value)}</div>
        </div>
      ))}
    </div>
  )
}
