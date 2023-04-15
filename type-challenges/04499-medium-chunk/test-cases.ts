import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]

type Chunk<T extends any[], U extends number, Res extends any[] = [], Item extends any[] = []> = T extends [infer First, ...infer Rest]
  ? Item['length'] extends U
  ? Chunk<Rest, U, [...Res, Item], [First]>
  : Chunk<Rest, U, Res, [...Item, First]>
  : Item extends []
  ? []
  : [...Res, Item]