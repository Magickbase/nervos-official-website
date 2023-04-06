import React, {
  ComponentProps,
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

export interface TOCItemInfo {
  id: string
  title: string
  el: HTMLElement
  isActive: boolean
  isInViewport: boolean
}

export interface TOCContextValue {
  tocItems: TOCItemInfo[]
  addTOCItem: (tocItemEl: HTMLElement, title: string) => void
  removeTOCItem: (tocItemEl: HTMLElement) => void
}

export const TOCContext = createContext<TOCContextValue>(
  new Proxy(
    {},
    {
      get: () => {
        throw new Error('TOCContext must wrapped by provider')
      },
    },
  ) as TOCContextValue,
)

export const TOCContextProvider: FC<PropsWithChildren> = props => {
  const [tocItems, setTOCItems] = useState<TOCItemInfo[]>([])

  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry == null) return

      setTOCItems(tocItems => {
        let newTOCItems = tocItems.map(tocItem => {
          if (tocItem.el !== entry.target) return tocItem
          return {
            ...tocItem,
            isInViewport: entry.isIntersecting,
          }
        })

        const topmost = newTOCItems
          .filter(item => item.isInViewport)
          .reduce(
            (topmost, item) => (topmost && topmost.el.clientTop <= item.el.clientTop ? topmost : item),
            null as TOCItemInfo | null,
          )
        newTOCItems = newTOCItems.map(tocItem => ({
          ...tocItem,
          isActive: tocItem === topmost,
        }))

        return newTOCItems
      })
    })

    return () => observer.current?.disconnect()
  }, [])

  const addTOCItem: TOCContextValue['addTOCItem'] = useCallback((tocItemEl, title) => {
    setTOCItems(tocItems => [
      ...tocItems,
      {
        id: tocItemEl.id,
        title,
        el: tocItemEl,
        isActive: false,
        isInViewport: false,
      },
    ])
    observer.current?.observe(tocItemEl)
  }, [])

  const removeTOCItem: TOCContextValue['removeTOCItem'] = useCallback(tocItemEl => {
    setTOCItems(tocItems => tocItems.filter(val => val.el !== tocItemEl))
    observer.current?.unobserve(tocItemEl)
  }, [])

  return <TOCContext.Provider value={{ tocItems, addTOCItem, removeTOCItem }}>{props.children}</TOCContext.Provider>
}

export const TOCItem: FC<ComponentProps<'div'> & { id: string; titleInTOC: string }> = props => {
  const { children, id, titleInTOC, ...divProps } = props
  const ref = useRef<HTMLDivElement>(null)

  const { addTOCItem, removeTOCItem } = useContext(TOCContext)

  useEffect(() => {
    const el = ref.current
    if (el == null) return

    addTOCItem(el, titleInTOC)
    return () => removeTOCItem(el)
  }, [addTOCItem, removeTOCItem, titleInTOC])

  return (
    <div ref={ref} id={encodeURIComponent(id.toLowerCase().replaceAll(' ', '_'))} {...divProps}>
      {children}
    </div>
  )
}
