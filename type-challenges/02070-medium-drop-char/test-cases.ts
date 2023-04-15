import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]

type sc = DropChar<' b u t t e r f l y ! ', ' '>

type DropChar<T extends string, U extends string, K extends string = ''> = U extends ''
  ? T
  : T extends `${infer First}${infer Rest}`
  ? Equal<First, U> extends true
  ? DropChar<Rest, U, K>
  : DropChar<Rest, U, `${K}${First}`>
  : `${K}${T}`