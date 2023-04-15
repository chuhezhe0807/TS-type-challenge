import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]

type MyUncapitalize<S extends string> = S extends `${infer F}${infer Rest}`
  ? `${Lowercase<F>}${Rest}`
  : S

type KebabCase<S extends string> = S extends `${infer F}${infer Rest}`
  ? Rest extends MyUncapitalize<Rest>
  ? `${Lowercase<F>}${KebabCase<Rest>}`
  : `${Lowercase<F>}-${KebabCase<Rest>}`
  : S
