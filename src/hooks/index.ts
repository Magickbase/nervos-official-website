import { useState, useEffect, useCallback, DependencyList, RefObject } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import cssVars from '../styles/variables.module.scss'
import { useMemoizedFn } from './useMemoizedFn'

export * from './useMemoizedFn'
export * from './useMouse'

/**
 * copied from https://usehooks-ts.com/react-hook/use-media-query
 */
export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  useEffect(() => {
    const matchMedia = window.matchMedia(query)
    const handleChange = () => setMatches(getMatches(query))

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
  }, [query])

  return matches
}

export const useIsMobile = (ignoreHydrated?: boolean) => {
  const { mobileBreakPoint } = cssVars
  if (mobileBreakPoint == null) throw new Error('Incorrect css variable')

  const isMobile = useMediaQuery(`(max-width: ${mobileBreakPoint})`)

  // This logic is used to prevent some errors when Next.js hydration.
  // https://nextjs.org/docs/messages/react-hydration-error#possible-ways-to-fix-it
  const [hydrated, setHydrated] = useState(ignoreHydrated ? true : false)
  useEffect(() => setHydrated(true), [])
  return isMobile && hydrated
}

export function useDevicePixelRatio() {
  const [pixelRatio, setPixelRatio] = useState(globalThis.devicePixelRatio ?? 1)

  const matched = useMediaQuery(`(resolution: ${pixelRatio}dppx)`)
  useEffect(() => {
    if (matched) return
    setPixelRatio(globalThis.devicePixelRatio ?? 1)
  }, [matched])

  return pixelRatio
}

export function useBoolean(initialState: boolean): [
  boolean,
  {
    on: () => void
    off: () => void
    toggle: (newState?: boolean) => void
  },
] {
  const [state, setState] = useState(initialState)

  const on = useCallback(() => setState(true), [])
  const off = useCallback(() => setState(false), [])
  const toggle = useCallback((newState?: boolean) => {
    setState(oldState => (newState != null ? newState : !oldState))
  }, [])

  return [
    state,
    {
      on,
      off,
      toggle,
    },
  ]
}

export const useInterval = (callback: () => void, delay: number, deps: DependencyList) => {
  const wrappedCallback = useMemoizedFn(callback)

  useEffect(() => {
    const listener = setInterval(wrappedCallback, delay)
    return () => clearInterval(listener)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, wrappedCallback, ...deps])
}

export function useElementSize(
  ref: RefObject<HTMLElement>,
  callback?: (size: { width: number; height: number }) => void | (() => void),
) {
  const { width: resizedWidth, height: resizedHeight } = useResizeDetector({
    targetRef: ref,
  })
  const width = resizedWidth ?? ref.current?.clientWidth ?? null
  const height = resizedHeight ?? ref.current?.clientHeight ?? null

  const wrappedCallback = useMemoizedFn(callback)
  useEffect(() => {
    if (ref.current == null) return
    const width = resizedWidth ?? ref.current.clientWidth
    const height = resizedHeight ?? ref.current.clientHeight
    // TODO: called only when the last value is different.
    wrappedCallback({ width, height })
  }, [resizedWidth, resizedHeight, ref, wrappedCallback])

  return { width, height }
}

export function useElementIntersecting(
  ref: RefObject<HTMLElement>,
  opts: IntersectionObserverInit = {},
  defaultValue = false,
) {
  const [isIntersecting, setIntersecting] = useState(defaultValue)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry == null) return
      setIntersecting(entry.isIntersecting)
    }, opts)
    observer.observe(el)

    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(el)
      observer.disconnect()
    }
  }, [opts, ref])

  return isIntersecting
}

export function useBodyClass(tokens: string[]) {
  useEffect(() => {
    // TODO: The very simple way of writing, without providing a counter for each class,
    // may lead to some unanticipated class removal behavior when the effect Destructor is executed.
    document.body.classList.add(...tokens)
    return () => document.body.classList.remove(...tokens)
  }, [tokens])
}
