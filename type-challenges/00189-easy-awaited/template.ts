// type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer X> ? X extends PromiseLike<any> ? MyAwaited<X> : X : never;

// PromiseLike类型来解析任何具有then方法的对象的结果