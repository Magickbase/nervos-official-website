import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Description, DescriptionType } from './Description'
import { Functions, FunctionsType } from './Functions'
import { Header, HeaderType } from './Header'
import { Info, InfoType } from './Info'
import { Resources, ResourcesType } from './Resources'
import { Positions, PositionsType } from './Positions'
import { ProgressBar } from './ProgressBar'
import { FunctionsItemType } from './FunctionsItem'

import styles from './index.module.scss'
import { Supports } from './Supports'

const screenWidth = globalThis.screen?.width ?? 1920

export type BaseSeparatePageType = HeaderType &
  DescriptionType &
  Partial<PositionsType> &
  Partial<InfoType> &
  FunctionsType &
  Partial<ResourcesType> & {
    functionsExtensionTitle?: {
      extensionTitle: string | ReactNode
      extensionTitleFunctions: FunctionsItemType[]
    }
    isProgressBar?: boolean
    isNeedSupports?: boolean
    headerClassName?: string
    descriptionClassName?: string
    infoClassName?: string
    functionsClassName?: string
    functionsTitleClassName?: string
    extensionTitleFunctionsClassName?: string
    embellishedElements?: {
      image: StaticImageData
      top?: number
      right?: number
      left?: number
      fill?: boolean
    }[]
  }

export const BaseSeparatePage: FC<BaseSeparatePageType> = props => {
  const {
    className,
    headerClassName,
    descriptionClassName,
    infoClassName,
    functionsClassName,
    functionsTitleClassName,
    extensionTitleFunctionsClassName,
    embellishedElements,
    title,
    floatIcons,
    description,
    positionsData,
    info,
    editor,
    functions,
    functionsExtensionTitle,
    isProgressBar = true,
    isNeedSupports = false,
    resourceData,
    ...rest
  } = props

  const FunctionsContainer = ({
    functions,
    isProgressBar,
    className,
  }: {
    functions: FunctionsItemType[]
    isProgressBar?: boolean
    className?: string
  }) => (
    <div className={styles.functionsWrap}>
      <Functions isProgressBar={isProgressBar} functions={functions} className={className} />
      {/* Todo: progressbar need complete later*/}
      {isProgressBar ? <ProgressBar className={clsx(styles.progressBar)} /> : null}
    </div>
  )

  return (
    <div className={clsx(styles.baseSeparatePage, className)} {...rest}>
      <div className={styles.embellishedElements}>
        {embellishedElements?.map((embellishedElement, idx) => {
          // TODO: At present, it is expected that all incoming graphs are 4x,
          // and will be improved to automatically assign.
          const imageWidth = embellishedElement.image.width / 4
          const widthToBeFilled = screenWidth / 2 - (embellishedElement.left ?? embellishedElement.right ?? 0)
          const amountOfFilled = embellishedElement.fill ?? true ? Math.ceil(widthToBeFilled / imageWidth) : 1

          return (
            <div
              key={idx}
              className={clsx(styles.embellishedElement, { [styles.left ?? '']: embellishedElement.left == null })}
              style={{ top: embellishedElement.top, right: embellishedElement.right, left: embellishedElement.left }}
            >
              {new Array(amountOfFilled).fill(0).map((_, idx) => (
                <Image key={idx} src={embellishedElement.image} width={imageWidth} className={styles.image} alt="" />
              ))}
            </div>
          )
        })}
      </div>

      <Header className={clsx(styles.headerClassName, headerClassName)} title={title} floatIcons={floatIcons} />
      <div className={styles.descriptionWrap}>
        <Description className={descriptionClassName} description={description} />
      </div>

      {positionsData ? (
        <div className={styles.positionsWrap}>
          <Positions positionsData={positionsData} />
        </div>
      ) : null}
      {info ? (
        <div className={styles.infoWrap}>
          <Info className={infoClassName} info={info} editor={editor} />
        </div>
      ) : null}

      {functionsExtensionTitle?.extensionTitle ? (
        <div className={clsx(styles.functionsTitleWrap, functionsTitleClassName)}>
          {functionsExtensionTitle.extensionTitle}
        </div>
      ) : null}

      {functionsExtensionTitle?.extensionTitleFunctions ? (
        <FunctionsContainer
          functions={functionsExtensionTitle.extensionTitleFunctions}
          isProgressBar={isProgressBar}
          className={extensionTitleFunctionsClassName}
        />
      ) : null}
      {isNeedSupports ? (
        <div className={clsx(styles.supportsWrap)}>
          <Supports />
        </div>
      ) : null}

      <FunctionsContainer functions={functions} isProgressBar={isProgressBar} className={functionsClassName} />

      {resourceData ? (
        <div className={styles.resourcesWrap}>
          <Resources resourceData={resourceData} />
        </div>
      ) : null}
    </div>
  )
}
