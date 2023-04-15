import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
]

type sc = LastIndexOf<[string, any, 1, number, 'a', any, 1], any>

type sc2 = LastIndexOf<[1, 2, 3, 2, 1], 2>

type sc1 = Pop<[1, 2, 3, 2, 1]>

type Pop<T extends any[], U extends any[] = [1], A extends number = T['length']> = T extends [infer First, ...infer Rest]
  ? Equal<U['length'], A> extends true
  ? U extends [infer uFirst, ...infer uRest]
  ? uRest
  : never
  : Pop<Rest, [...U, First], A>
  : never


type LastIndexOf<T extends any[], U, A extends any[] = Pop<T>> = T extends []
  ? -1
  : Equal<T[A['length']], U> extends true
  ? A['length']
  : LastIndexOf<Pop<T>, U>