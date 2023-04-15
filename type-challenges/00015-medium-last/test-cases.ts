import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

type Last<T> = T extends [infer First, ...infer Rest] ? Equal<Rest['length'], 1> extends true ? Rest[0] : Last<Rest> : never