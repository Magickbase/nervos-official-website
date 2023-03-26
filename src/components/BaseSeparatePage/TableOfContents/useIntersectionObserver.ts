import { useEffect, useRef } from 'react'

const useIntersectionObserver = (setActiveId: React.Dispatch<React.SetStateAction<string>>) => {
  const headingElementsRef = useRef<Record<string, IntersectionObserverEntry>>({})
  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement
        return map
      }, headingElementsRef.current)

      const visibleHeadings: IntersectionObserverEntry[] = []

      Object.keys(headingElementsRef.current).forEach((key: string) => {
        const headingElement: IntersectionObserverEntry = headingElementsRef.current[key]!

        if (headingElement.isIntersecting) visibleHeadings.push(headingElement)
      })

      const getIndexFromId = (id: string) => headingElements.findIndex(heading => heading.id === id)

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0]?.target.id as string)
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id),
        )
        setActiveId(sortedVisibleHeadings[0]?.target.id as string)
      }
    }

    const observer = new IntersectionObserver(callback, {
      // This is to adjust when you listen to elements, margins affect the precision of the listening
      rootMargin: '-120px 0px 0px 0px',
    })

    const headingElements = Array.from(document.getElementsByClassName('observeTitle'))

    headingElements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [setActiveId])
}

export default useIntersectionObserver
