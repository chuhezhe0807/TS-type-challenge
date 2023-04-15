import type { Equal, Expect } from '@type-challenges/utils'

type Falsy = false | 0 | '' | null | undefined

type cases = [
    Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
    Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
    Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
]

type Filter<T extends any[], U, A extends any[] = []> = T extends [infer First, ...infer Rest]
    ? First extends U
    ? Filter<Rest, U, [...A, First]>
    : Filter<Rest, U, [...A]>
    : A


type Test = {
    name: string,
    age: number
}