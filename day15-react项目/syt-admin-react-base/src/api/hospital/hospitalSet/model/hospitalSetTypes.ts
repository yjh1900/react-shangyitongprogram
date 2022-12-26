// 医院设置相关的类型

// 医院设置表格数据的类型
// 注意: 根据接口文档响应的数据定义接口.不需要写所有的属性,需要用到哪个就写哪个
export interface IhospitalSetsRes {
  records: IhospitalSet[]
  total: number
}

// 给IhospitalSet[]起一个类型别名
export type IhospitalSets = IhospitalSet[]
// 医院设置每一条数据对象的类型
export interface IhospitalSet {
  // 接口中属性名,如果加双引号也是可以的.和不加双引号一样
  id: number
  createTime: string
  updateTime: string
  hosname: string
  hoscode: string
  apiUrl: string
  signKey: string
  contactsName: string
  contactsPhone: string
}

// 添加医院上传的参数的接口
export interface IaddHosSetParams {
  hosname: string
  hoscode: string
  apiUrl: string
  contactsName: string
  contactsPhone: string
}
