import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
    // @ts-expect-error
    MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
}

interface Expected2 {
    title: string
    completed: boolean
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

interface IObj {
    name: string;
    age: number;
}

const obj: IObj = {
    name: "xiaozhang",
    age: 20
}

function func(abc: MyPick<IObj, "age">): MyPick<IObj, "name"> {
    console.log(abc.age);


    return { name: "111" }
}