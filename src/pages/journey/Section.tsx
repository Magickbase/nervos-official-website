import clsx from 'clsx'
import { StyledLink } from 'src/components/StyledLink'
import styles from './Section.module.scss'

type SectionProps = {
  title: React.ReactElement
  icon: string
  iconSize: {
    with: string
    height: string
  }
  iconPosition: 'left' | 'right'
  subtitle: React.ReactNode
  descriptionText: string
  descriptionLink: string
  projects: Record<'label' | 'url', string>[]
  className?: string
}

export const Section: React.FC<SectionProps> = ({
  title,
  icon,
  iconSize,
  iconPosition,
  subtitle,
  descriptionText,
  descriptionLink,
  projects,
  className,
}) => {
  return (
    <div className={clsx(styles.container, iconPosition === 'right' && styles.reverse, className)}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <img src={icon} alt="" style={{ width: iconSize.with, height: iconSize.height }} />
        </div>
      </div>
      <div className={styles.detailWrapper}>
        <div>{title}</div>
        <div className={styles.divider} />
        <div className={styles.subtitle}>{subtitle}</div>
        {descriptionText.startsWith('__hidden__description') ? null : (
          <div className={styles.descriptionText}>
            {descriptionText} {/* TODO: add real href here */}
            <StyledLink className={styles.link} href={''} colored>
              {descriptionLink}
            </StyledLink>
          </div>
        )}
        {projects.map(project => (
          <StyledLink className={styles.project} key={project.label} href={project.url}>
            {project.label}
          </StyledLink>
        ))}
      </div>
    </div>
  )
}
