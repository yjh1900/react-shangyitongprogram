// 注意: ts中用接口来描述对象的数据类型

// 定义接口
// 规范: 接口的名称以I开头,并且大写
// 接口可以理解为就是一个数据类型
// 接口里面的属性个数默认情况下,不能多也不能少.属性的数据类型也不能错
interface Iperson {
  readonly name: string //必写 只读
  age: number //必写
  sex?: boolean //可选的属性
  //   xxx其实就相当于是一个变量名,这个名字随便写
  // xxx后面的string,是描述属性的数据类型.如果是对象,则属性的数据类型其实就是字符串.如果是数组,则属性的数据类型还有数字(下标)
  // 注意: 如果接口中定义了任意属性,则任务属性的数据类型,必须包含其他属性的数据类型
  [xxx: string]: string | number | boolean //任意属性 任意属性定义出来之后,可以写多个属性
}
let obj: Iperson = {
  name: 'zs', //只读属性,是可以初始化的.但是不能修改
  age: 18,
  sex: false,
  hobby: 123,
  info: '12312312',
}

// obj.name = 'ls' //修改是不可以的

// obj.age.length
// obj.name.length
