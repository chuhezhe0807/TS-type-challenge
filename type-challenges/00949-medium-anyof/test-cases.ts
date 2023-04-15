import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]

// your answers
type Falsey = [
  "",
  0,
  [],
  {},
  false,
  null,
  undefined,
  { [key in PropertyKey]: never }
];

type IsTruthy<T, U = Falsey> = U extends [infer S, ...infer E]
  ? S extends T
  ? false
  : IsTruthy<T, E>
  : true;

type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? IsTruthy<F> extends true
  ? true
  : AnyOf<R>
  : false;