import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]

type sc = Without<[1, 2], 1>

type sc1 = ToUnion<[2, 3]>

type ToUnion<T extends number | any[]> = T extends number
  ? T
  : T extends any[]
  ? T[number]
  : never

type Without<T extends any[], U extends number | any[], A extends any[] = []> = T extends [infer First, ...infer Rest]
  ? First extends ToUnion<U>
  ? Without<Rest, U, A>
  : Without<Rest, U, [...A, First]>
  : A