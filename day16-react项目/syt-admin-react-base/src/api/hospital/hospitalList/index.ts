// 定义医院列表相关请求函数

import { request } from '@utils/http'
import {
  IhospitalListParams,
  IhospitalListRes,
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
