import type { Alike, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}

type Exclude<T, U> = T extends U ? never : T

type Omit<T, U> = {
  [P in Exclude<keyof T, U>]: T[P]
}

type MyReadonly2<T, U extends keyof T = keyof T> = {
  readonly [P in keyof T]: T[P]
} & Omit<T, U>
