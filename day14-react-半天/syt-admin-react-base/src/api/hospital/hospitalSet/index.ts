// 定义医院设置界面所有请求的函数
// request 就是提前封装的好的axios实例对象
import { request } from '@/utils/http'

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
  return request.get(`/admin/hosp/hospitalSet/${page}/${limit}`, {
    params: {
      hosname,
      hoscode,
    },
  })
}
