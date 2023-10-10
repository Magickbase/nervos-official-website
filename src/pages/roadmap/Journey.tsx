import clsx from 'clsx'
import { ArrowIcon } from './icons'
import styles from './Journey.module.scss'

type JourneyProps = {
  title: React.ReactElement
  icon: string
  iconPosition: 'left' | 'right'
  description: string
  joinLink: string
  joinLinkText: string
  className?: string
}

export const Journey: React.FC<JourneyProps> = ({
  title,
  icon,
  iconPosition,
  description,
  joinLink,
  joinLinkText,
  className,
}) => {
  return (
    <div className={clsx(styles.container, iconPosition === 'right' && styles.reverse, className)}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <img src={icon} alt="" />
        </div>
      </div>
      <div className={styles.detailWrapper}>
        <div>{title}</div>
        <div className={styles.divider} />
        <div className={styles.description}>{description}</div>
        <div className={styles.joinLink}>
          <a href={joinLink} target="_blank" rel="noopener noreferrer">
            {joinLinkText} <ArrowIcon className={styles.arrowIcon} />
          </a>
        </div>
      </div>
    </div>
  )
}
