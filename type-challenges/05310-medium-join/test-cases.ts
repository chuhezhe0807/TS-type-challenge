import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
]

type sc = Join<['a', 'p', 'p', 'l', 'e'], '-'>

type Join<T extends any[], U extends string | number, PrevStr extends string = ''> = T extends [infer First extends string, ...infer Rest]
  ? Join<Rest, U, `${PrevStr}${First}${Rest['length'] extends 0 ? '' : U}`>
  : PrevStr