let aaa: string | number
aaa = '123'
// aaa = 123

// 注意: 访问联合类型的时候,只能访问这些联合类型共有的属性或方法
function getLength(something: string | number): string {
  return something.toString()
}
