import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
]

type sc = Unique<[unknown, unknown, any, any, never, never]>

type sc1 = Equal<unknown, never> extends true ? true : false

type sc2 = IsEqual<[unknown, unknown, any, any, never, never], never>

type sc3 = unknown extends [unknown, unknown, any, any, never, never][number] ? true : false

type IsEqual<T extends any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
  ? true
  : IsEqual<Rest, U>
  : false

// type Unique<T extends any[], A extends any[] = []> = T extends [infer First, ...infer Rest]
//   ? First extends A[number]
//       ? IsEqual<A, First> extends false
//         ? Unique<Rest, [...A, First]>
//         : Unique<Rest, A>
//       : Unique<Rest, [...A, First]>
//   : A

type Unique<T extends any[], A extends any[] = []> = T extends [infer First, ...infer Rest]
  ? Unique<Rest, [...A, ...(IsEqual<A, First> extends true ? [] : [First])]>
  : A


// Github_Answer
// type Includes<T extends unknown[], U> = T extends [infer Start, ...infer End] ?
//   Equal<Start, U> extends true ? true : Includes<End, U> : false;

// type Unique<T extends unknown[], R extends unknown[] = []> = T extends [infer Start, ...infer End] ?
//   Unique<End, [...R, ...(Includes<R, Start> extends false ? [Start] : [])]> : R