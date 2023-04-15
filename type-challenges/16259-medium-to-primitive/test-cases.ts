import type { Equal, Expect } from '@type-challenges/utils'

type PersonInfo = {
  name: 'Tom'
  age: 30
  married: false
  addr: {
    home: '123456'
    phone: '13111111111'
  }
  hobbies: ['sing', 'dance']
}

type ExpectedResult = {
  name: string
  age: number
  married: boolean
  addr: {
    home: string
    phone: string
  }
  hobbies: [string, string]
}

type cases = [
  Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>,
]

type sc = ToPrimitive<PersonInfo>

type IsString<T> = T extends string ? string : never
type IsNumber<T> = T extends number ? number : never
type IsBoolean<T> = T extends boolean ? boolean : never
type Typeof<T> = T extends string | number | boolean
  ? IsString<T> | IsNumber<T> | IsBoolean<T>
  : T

type ToPrimitive<T> = T extends Record<any, any>
  ? { [Key in keyof T]: ToPrimitive<T[Key]> }
  : Typeof<T>