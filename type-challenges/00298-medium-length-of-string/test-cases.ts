import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

type LengthOfString<S extends string, A extends Array<string> = []> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [F, ...A]>
  : A['length']