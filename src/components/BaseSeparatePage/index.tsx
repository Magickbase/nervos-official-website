import clsx from 'clsx'
import { FC } from 'react'
import { Description, DescriptionType } from './components/Description'
import { Functions, FunctionsType } from './components/Functions'
import { Header, HeaderType } from './components/Header'
import { Info, InfoType } from './components/Info'
import { Resources, ResourcesType } from './components/Resources'
import styles from './index.module.scss'

export type BaseSeparatePageType = HeaderType &
  DescriptionType &
  InfoType &
  FunctionsType &
  ResourcesType & {
    headerClassName?: string
    descriptionClassName?: string
    infoClassName?: string
    functionsClassName?: string
  }

export const BaseSeparatePage: FC<BaseSeparatePageType> = props => {
  const {
    className,
    headerClassName,
    descriptionClassName,
    infoClassName,
    functionsClassName,
    title,
    floatIcons,
    description,
    info,
    editor,
    functions,
    resources,
    ...rest
  } = props

  return (
    <div className={clsx(styles.baseSeparatePage, className)} {...rest}>
      <Header className={clsx(styles.headerClassName, headerClassName)} title={title} floatIcons={floatIcons} />
      <div className={clsx(styles.descriptionWrap)}>
        <Description className={clsx(descriptionClassName)} description={description} />
      </div>
      <div className={clsx(styles.infoWrap)}>
        <Info className={clsx(infoClassName)} info={info} editor={editor} />
      </div>
      <div className={styles.functionsWrap}>
        <Functions functions={functions} className={clsx(functionsClassName)} />
      </div>
      <div className={styles.resourcesWrap}>
        <Resources resources={resources} />
      </div>
    </div>
  )
}
