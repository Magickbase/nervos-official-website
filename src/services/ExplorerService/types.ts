// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Response {
  export interface Wrapper<T> {
    data: T
    meta?: Meta
    error?: Error[]
  }

  export interface Meta {
    total: number
    pageSize: number
  }

  export interface ItemWrapper<T> {
    id: number
    type: string
    attributes: T
  }
}
