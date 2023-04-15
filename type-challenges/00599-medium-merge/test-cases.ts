import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]

type sc = Merge<Foo, Bar>

type Merge<T, U> = {
  [P in keyof T | keyof U]: P extends keyof U ? U[P] : P extends keyof T ? T[P] : never
}