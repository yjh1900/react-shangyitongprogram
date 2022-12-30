// 定义医院列表相关请求函数

import { request } from '@utils/http'
import {
  IhospitalListParams,
  IhospitalListRes,
  IdictList,
  IhospitalDetail,
  IdepList,
  IscheduleRuleRes,
  IscheduleDetailList,
  Status,
} from './model/hospitalListTypes'
// 获取医院列表表格数据的函数
export function reqGetHospitalList({
  page,
  limit,
  hoscode,
  hosname,
  hostype,
  provinceCode,
  cityCode,
  districtCode,
  status,
}: IhospitalListParams) {
  return request.get<any, IhospitalListRes>(
    `/admin/hosp/hospital/${page}/${limit}`,
    {
      params: {
        hoscode,
        hosname,
        hostype,
        provinceCode,
        cityCode,
        districtCode,
        status,
      },
    }
  )
}

// 获取省数据函数
export function reqGetProvince(dictCode: string = 'province') {
  return request.get<any, IdictList>(
    `/admin/cmn/dict/findByDictCode/${dictCode}`
  )
}
// 获取市或区或医院类型数据函数
export function reqGetCoDoT(parentId: string) {
  return request.get<any, IdictList>(
    `/admin/cmn/dict/findByParentId/${parentId}`
  )
}
// 获取详情的函数
export function reqGetHospitalDetail(id: string) {
  return request.get<any, IhospitalDetail>(`/admin/hosp/hospital/show/${id}`)
}

// 获取所有科室数据
export function reqGetDepList(hoscode: string) {
  return request.get<any, IdepList>(`/admin/hosp/department/${hoscode}`)
}

// 获取排班规则方法
export function reqGetScheduleRules(
  page: number,
  limit: number,
  hoscode: string,
  depcode: string
) {
  return request.get<any, IscheduleRuleRes>(
    `/admin/hosp/schedule/getScheduleRule/${page}/${limit}/${hoscode}/${depcode}`
  )
}

// 获取排班详情
export function reqGetScheduleDetail(
  hoscode: string,
  depcode: string,
  workDate: string
) {
  return request.get<any, IscheduleDetailList>(
    `/admin/hosp/schedule/findScheduleList/${hoscode}/${depcode}/${workDate}`
  )
}

// 修改医院状态
export function reqUpdateHospitalStatus(id: string, status: Status) {
  return request.get<any, null>(
    `/admin/hosp/hospital/updateStatus/${id}/${status}`
  )
}
