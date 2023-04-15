// type First<T extends any[]> = T extends [] ? never : T[0]

// type First<T extends any[]> = T extends [infer P, ...infer Rest] ? P : never

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

type strArr = Array<number>
type aa = strArr['length']