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
export interface IhospitalListItem extends Ihos {
  id: string
  createTime: string
  // hoscode: string
  // hosname: string
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

// 医院详情相关的接口
interface Ihos {
  hoscode: string
  hosname: string
}
interface IbookingRule {
  cycle: number
  releaseTime: string
  stopTime: string
  quitDay: number
  quitTime: string
  rule: string[]
}

// Ihospital中写的就是自定义的. Ihos中的hoscode和hosname被Ihospital继承了
interface Ihospital extends Ihos {
  id: string
  createTime: string
  updateTime: string
  isDeleted: number
  param: {
    hostypeString: string
    fullAddress: string
  }
  hostype: string
  provinceCode: string
  cityCode: string
  districtCode: string
  address: string
  logoData: string
  intro: string
  route: string
  status: number
}
export interface IhospitalDetail {
  // 注意: 这里将两个属性定义为可选,是为了初始化数据的时候方便
  bookingRule?: IbookingRule
  hospital?: Ihospital
}

// 所有科室数据的接口
export type IdepList = IdepItem[]
export interface IdepItem {
  depcode: string
  depname: string
  children: IdepList
  disabled?: boolean
}

// 排班规则数据接口

// 排班规则数据对象接口
export interface IscheduleRuleItem {
  workDate: string
  dayOfWeek: string
  reservedNumber: number
  availableNumber: number
}

export type IscheduleRuleList = IscheduleRuleItem[]

export interface IscheduleRuleRes {
  total: number
  bookingScheduleList: IscheduleRuleList
  baseMap: {
    hosname: string
  }
}

// 排班详情数据接口
export interface IscheduleDetail {
  id: string
  title: string
  skill: string
  workDate: string
  reservedNumber: number
  availableNumber: number
  amount: number
}
export type IscheduleDetailList = IscheduleDetail[]
