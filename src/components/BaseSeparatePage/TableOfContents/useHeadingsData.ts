import { useEffect, useState } from 'react'

/**
 * Dynamically generates the table of contents list
 */

export type NestedHeadingtype = {
  id: string
  title: string
  items?: NestedHeadingtype[]
}

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState<NestedHeadingtype[]>([])

  useEffect(() => {
    const headingElements: Element[] = Array.from(document.getElementsByClassName('observeTitle'))

    const newNestedHeadings = getNestedHeadings(headingElements as HTMLElement[])
    setNestedHeadings(newNestedHeadings)
  }, [])

  return { nestedHeadings }
}

const getNestedHeadings = (headingElements: HTMLElement[]) => {
  const nestedHeadings: NestedHeadingtype[] = []

  headingElements.forEach(heading => {
    const { innerText: title, id } = heading
    nestedHeadings.push({ id, title, items: [] })
  })

  return nestedHeadings
}

export default useHeadingsData
