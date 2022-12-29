// 定义医院列表相关的接口

// 定义获取表格数据时,要上传参数的接口
export interface IhospitalListParams {
  page: number
  limit: number
  hoscode?: string
  hosname?: string
  hostype?: string
  provinceCode?: string
  cityCode?: string
  districtCode?: string
  status?: Status
}

export type Status = 0 | 1

// 响应的医院列表表格数据的接口
export interface IhospitalListRes {
  content: IhospitalList
  totalElements: number
}

// 响应数据中每一个数据对象的接口
export interface IhospitalListItem {
  id: string
  createTime: string
  hoscode: string
  hosname: string
  hostype: string
  address: string
  logoData: string
  status: Status
}

export type IhospitalList = IhospitalListItem[]

// 定义省市区数据对象接口
export interface IdictItem {
  id: number
  name: string
  value: string
}

export type IdictList = IdictItem[]
