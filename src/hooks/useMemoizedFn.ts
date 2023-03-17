/**
 * Modified from
 * https://github.com/alibaba/hooks/blob/37749a3a9a6927162e4c68146c9e06a0dffb32f9/packages/hooks/src/useMemoizedFn/index.ts
 */
import { useMemo, useRef } from 'react'

type noop = (this: any, ...args: any[]) => any

type PickFunction<T extends noop> = (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T>

export function useMemoizedFn<T extends noop>(fn: T): T
export function useMemoizedFn<T extends noop>(fn?: T): T | (() => void)
export function useMemoizedFn<T extends noop>(fn?: T): T | (() => void) {
  const fnRef = useRef<T | undefined>(fn)

  // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = useMemo(() => fn, [fn])

  const memoizedFn = useRef<PickFunction<T>>()
  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return fnRef.current?.apply(this, args)
    }
  }

  return memoizedFn.current as T
}
