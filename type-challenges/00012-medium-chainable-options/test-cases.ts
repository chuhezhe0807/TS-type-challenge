import type { Alike, Expect } from '@type-challenges/utils'


declare const a: Chainable

type MyExclude<T, K> = T extends K ? never : T

type MyOmit<T, K> = {
  [P in MyExclude<keyof T, K>]: T[P]
}

type Chainable<T extends Object = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<(K extends keyof T ? MyOmit<T, K> : T) & { [P in K]: V }>
  get(): T
}

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

const result3 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 123)
  .get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>,
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

type Expected3 = {
  name: number
}