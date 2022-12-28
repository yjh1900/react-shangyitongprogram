// 定义医院设置界面所有请求的函数
// request 就是提前封装的好的axios实例对象
import { request } from '@/utils/http'
// 引入ts类型
import { IhospitalSetsRes, IaddHosSetParams } from './model/hospitalSetTypes'

// 获取医院设置表格数据的函数

export const reqGetHospitalSets = (
  page: number, //第几页数据
  limit: number, // 一页多少条
  hosname?: string, //医院名称
  hoscode?: string // 医院编码
) => {
  //后端也有路由参数,后端的路由参数也是直接写在路径中
  // 自己拼接查询字符串
  //   return request.get(
  //     `/admin/hosp/hospitalSet/${page}/${limit}?hosname=${hosname}&hoscode=${hoscode}`
  //   )
  // 在发请求的函数中可以传入泛型,来声明我们接受的数据是什么数据类型的
  // 第一个固定就是any,第二个是我们数据的数据类型
  return request.get<any, IhospitalSetsRes>(
    `/admin/hosp/hospitalSet/${page}/${limit}`,
    {
      params: {
        hosname,
        hoscode,
      },
    }
  )
}

// 添加医院设置的函数
export const reqAddHospitalSet = (data: IaddHosSetParams) => {
  return request.post<any, null>(`/admin/hosp/hospitalSet/save`, data)
}

// 修改医院设置的函数
export const reqEditHospitalSet = (data: IaddHosSetParams) => {
  return request.put<any, null>(`/admin/hosp/hospitalSet/update`, data)
}

// 删除一条医院设置的函数

export const reqDelHospitalSet = (id: string) => {
  return request.delete<any, null>(`/admin/hosp/hospitalSet/remove/${id}`)
}
