import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
]

type sc = 'a' extends ['a', 'b', 'c'][number] ? true : false

type sc3 = 'a' extends [][number] ? true : false

type sc1 = '123'['length'] extends 3 ? true : false

type sc2 = FirstUniqueCharIndex<'aabb'>

type sc4 = HasStr<'', 'a'>

// type StringToArray<T extends >

type HasStr<T extends string, U extends string> = T extends `${infer First}${infer Rest}`
  ? First extends U
  ? true
  : HasStr<Rest, U>
  : false

type FirstUniqueCharIndex<T extends string, A extends any[] = []> = T extends `${infer First}${infer Rest}`
  ? HasStr<Rest, First> extends true
  ? FirstUniqueCharIndex<Rest, [...A, First]>
  : First extends A[number]
  ? FirstUniqueCharIndex<Rest, [...A]>
  : A['length']
  : -1
