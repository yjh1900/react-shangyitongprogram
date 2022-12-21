// interface Cat {
//   name: string
//   run(): void
// }
// interface Fish {
//   name: string
//   swim(): void
// }

// function getName(animal: Cat | Fish) {
//   return (animal as Fish).swim()
// }

//任何类型都可以断言成any
// (window as any).foo = 1

// function getCacheData(key: string): any {
//   return (window as any).cache[key]
// }

// interface Cat {
//   name: string
//   run(): void
// }

// const tom = getCacheData('tom') as Cat
// tom.run()

// class ApiError extends Error {
//   code: number = 0
// }
// class HttpError extends Error {
//   statusCode: number = 200
// }

// function isApiError(error: Error) {
//   if (typeof (error as ApiError).code === 'number') {
//     return true
//   }
//   return false
// }

// function fn(x: number | string) {
//   return (x as string).trim()
// }
// function fn(x: number) {
//   return (x as string).trim()
// }
