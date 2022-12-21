// let aaa: string = 1
// let aaa: any = 123

// any的问题:
// 如果使用了any,则后续的代码检查和代码提示全都没有了.千万要慎用!!!!
// let aaa: any = 123

// let aaa: any = 123
// aaa.bbb.ccc

// 类型推论(自动推论)
// 如果一个变量或常量声明了,但是没有初始化.则ts会自动认定这个变量或常量的数据类型是any
// let aaa
// aaa.trim()

// 如果声明变量或常量并且初始化了数据.则这个变量或变量的数据类型会自动推论为初始值的类型
// let bbb = 1
// bbb = 'false'
