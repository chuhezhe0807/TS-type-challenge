import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name?: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
]

// type sc = Required<Partial<{ key: undefined }>>

type ObjectEntries<T extends Object> = {
  [P in keyof Required<T>]: [P, Required<T>[P] extends never ? T[P] : Required<T>[P]]
}[keyof T]