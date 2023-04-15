import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
]

// type sc = ConstructTuple<1000>

type ConstructTuple<T extends number, A extends any[] = []> = A['length'] extends T
  ? A
  : ConstructTuple<T, [...A, unknown]>