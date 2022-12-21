// 函数名后面<>里面的T,相当于声明了一个类型的形参
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
// 调用函数时,函数名后面<> 里面写的是具体的数据类型. 这个数据类型会传递给函数定义的T
createArray<string>(3, 'x')[0] // ['x', 'x', 'x']
createArray<number>(2, 9)[0] // [9,9]

// 在定义函数的时候,不确定数据类型,但是在使用函数的时候,可以确定数据类型是什么就可以在函数上使用泛型. 并不是只有函数可以使用泛型.类,接口也都可以使用泛型,只是我们实际开发不涉及类和接口的泛型.所以在这里不做介绍.详情可以参考03-Typescript拓展阅读.md
