import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]

function fibonacci(n: number) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci1(n: number, a1: number, a2: number) {
  if (n <= 2) return a2;
  return fibonacci1(n - 1, a2, a1 + a2);
}

function fibonacci2(n: number) {
  let a1 = 1, a2 = 1, sum;
  for (let i = 2; i < n; i++) {
    sum = a1 + a2;
    a1 = a2;
    a2 = sum;
  }
  return sum;
}

type sc = Fibonacci<8>

type Fibonacci<T extends number, N extends number[] = [1], A1 extends number[] = [1], A2 extends number[] = []> = T extends N['length']
  ? [...A1, ...A2]['length']
  : Fibonacci<T, [...N, 1], A2, [...A1, ...A2]>