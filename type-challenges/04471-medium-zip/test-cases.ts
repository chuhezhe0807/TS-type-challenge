import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]

type Zip<T extends any[], U extends any[]> = T extends [infer tFirst, ...infer tRest]
  ? U extends [infer uFirst, ...infer uRest]
  ? [[tFirst, uFirst], ...Zip<tRest, uRest>]
  : []
  : []