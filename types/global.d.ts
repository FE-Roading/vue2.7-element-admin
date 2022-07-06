declare type Writable<T> = {
  -readonly [P in keyof T]: T[P]
}

declare type Nullable<T> = T | null
declare type NonNullable<T> = T extends null | undefined ? never : T
declare type Recordable<T = any> = Record<string, T>
declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}
declare type Indexable<T = any> = {
  [key: string]: T
}
declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
declare type TimeoutHandle = ReturnType<typeof setTimeout>
declare type IntervalHandle = ReturnType<typeof setInterval>

declare interface ChangeEvent extends Event {
  target: HTMLInputElement
}

declare interface WheelEvent {
  path?: EventTarget[]
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown
}

declare function parseInt(s: string | number, radix?: number): number

declare function parseFloat(string: string | number): number

type APP_INFO = {
  pkg: {
    name: string
    version: string
  }
  lastBuildTime: string
}

declare const __APP_INFO__: APP_INFO
declare interface Window {
  __APP_INFO__: APP_INFO
}
