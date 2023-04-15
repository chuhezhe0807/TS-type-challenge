import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
  Expect<Equal<StartsWith<'', ''>, true>>,
]

type StartsWith<T extends string, U extends string, F extends string = ''> = U extends ''
  ? true
  : T extends `${F}${infer First}${infer Rest}`
  ? Equal<`${F}${First}`, U> extends true
  ? true
  : StartsWith<T, U, `${F}${First}`>
  : false