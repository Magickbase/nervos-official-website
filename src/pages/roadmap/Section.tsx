import clsx from 'clsx'
import { StyledLink } from 'src/components/StyledLink'
import styles from './Section.module.scss'

type SectionProps = {
    title: React.ReactElement,
    icon: string,
    iconPosition: 'left' | 'right',
    subtitle: string,
    descriptionText: string,
    descriptionLink: string,
    projects: string[],
}

export const Section: React.FC<SectionProps> = ({
    title,
    icon,
    iconPosition,
    subtitle,
    descriptionText,
    descriptionLink,
    projects,
}) => {
    return <div className={clsx(styles.container, iconPosition==='right' &&styles.reverse)}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon} >
            <img src={icon} alt=''/>
          </div>
        </div>
        <div className={styles.detailWrapper}>
            <div>{title}</div>
            <div className={styles.divider}/> 
            <div className={styles.subtitle}>{subtitle}</div>
            <div className={styles.descriptionText}>{descriptionText}{' '}<StyledLink href={''} colored >{descriptionLink}</StyledLink></div>
            {projects.map((project) => <div className={styles.project} key={project}>{project}</div>)}
        </div>
    </div>
}