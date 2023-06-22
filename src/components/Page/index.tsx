import { ComponentProps, forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'
import { Footer, FooterProps } from '../Footer'
import { Header, HeaderProps } from '../Header'
import styles from './index.module.scss'
import { OGProperties, OpenGraph } from '../OpenGraph'

type PageProps = Omit<ComponentProps<'div'>, 'children'> & {
  children?:
    | ReactNode
    | ((opts: {
        renderHeader: (props?: HeaderProps) => ReactNode
        renderFooter: (props?: FooterProps) => ReactNode
      }) => JSX.Element | undefined)
  openGraph?: OGProperties | ((props: OGProperties) => OGProperties)
}

const defaultOpenGraph: OGProperties = {
  type: 'website',
  title: 'Nervos Network',
  description:
    'The Nervos Network is a flexible blockchain platform, secured by proof of work, which allows developers freedom of choice in cryptographic primitives and decentralized application architecture.',
  url: 'https://nervos.org',
  site_name: 'Nervos Network',
  twitter: {
    card: 'summary_large_image',
    site: '@NervosNetwork',
  },
  image: {
    url: `${process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : ''}/images/logo.png`,
  },
}

export const Page = forwardRef<HTMLDivElement, PageProps>(function Page(props, ref) {
  const { openGraph, children, className, ...divProps } = props

  const finalChildren = (
    <>
      <OpenGraph
        properties={typeof openGraph === 'function' ? openGraph(defaultOpenGraph) : openGraph ?? defaultOpenGraph}
      />

      {typeof children === 'function' ? (
        children({
          renderHeader: props => <Header {...props} />,
          renderFooter: props => <Footer {...props} />,
        })
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  )

  return (
    <div ref={ref} className={clsx(styles.page, className)} {...divProps}>
      {finalChildren}
    </div>
  )
})
