import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
]

type EndsWith<T extends string, U extends string> = Equal<T, U> extends true
  ? true
  : T extends `${infer First}${infer Rest}`
  ? Equal<Rest, U> extends true
  ? true
  : EndsWith<Rest, U>
  : false