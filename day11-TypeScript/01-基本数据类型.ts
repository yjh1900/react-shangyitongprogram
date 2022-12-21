// let bol: boolean = false
// let bol1: boolean = new Boolean(1) // new Boolean返回的是布尔对象
// let bol2: boolean = Boolean(0) // Boolean 返回的就是基本类型的布尔值

// let decLiteral: number = 6
// //  十六进制表示法
// let hexLiteral: number = 0xf00d
// // 二进制表示法
// let binaryLiteral: number = 0b1010
// // 八进制表示法
// let octalLiteral: number = 0o744
// let notANumber: number = NaN
// let infinityNumber: number = Infinity

// let str: string = '123'
// let str1: string = "123"
// let str2: string = `345`

// void在ts中是一个数据类型.表示空值. 主要用于表示一个函数没有返回值
// function alertName(): void {
//   alert('My name is Tom')
// }
// let xxx: void = undefined

// let xxx: undefined = undefined
// let yyy: undefined = null
// let zzz: null = null
// let qqq: null = undefined

// 注意: 数据null和undefined可以给任何类型赋值
// 原因: 在ts中,子类型可以直接赋值给父类型(null和undefined是所有类型的子类型)
// let aaa: string = null
// let bbb: number = undefined
// let ccc: boolean = undefined
// let zzz: void = null
