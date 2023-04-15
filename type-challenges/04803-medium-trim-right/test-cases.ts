import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
]

type sc = '' extends '' ? true : false

type sc1 = TrimLeft<'  1123  1  '>

type sc2 = FlipStr<'  1123  1  '>

type sc3 = TrimRight<'  1123  1  '>

type sc4 = TrimRight<'\n\t '>

type Spaces = ' ' | '\n' | '\t';

type TrimLeft<T extends string> = T extends `${Spaces}${infer Rest}` ? TrimLeft<Rest> : T

// type TrimLeft<T extends string, PrevStr extends string = ''> = T extends `${infer First}${infer Rest}`
//   ? First extends ' '
//     ? PrevStr extends '' 
//       ? TrimLeft<Rest> 
//       : `${First}${TrimLeft<Rest, `${PrevStr}${First}`>}`
//     : `${First}${TrimLeft<Rest, `${PrevStr}${First}`>}`
//   : T

type FlipStr<T extends string, S extends string = ''> = T extends `${infer First}${infer Rest}`
  ? FlipStr<Rest, `${First}${S}`>
  : S

// type TrimRight<T extends string> = `${FlipStr<TrimLeft<FlipStr<T>>>}`

type TrimRight<S extends string> = S extends
  `${infer R}${' ' | '\n\t'}` ? TrimRight<R> : S;