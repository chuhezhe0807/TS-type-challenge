import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]

type MyExclude<T, U> = T extends U ? never : T

type MyOmit<T extends Object, U> = {
  [P in MyExclude<keyof T, U>]: T[P]
}

type Diff<T extends Object, U extends Object> = {
  [P in keyof MyOmit<T, keyof U> | keyof MyOmit<U, keyof T>]: P extends keyof T ? T[P] : P extends keyof U ? U[P] : never
}