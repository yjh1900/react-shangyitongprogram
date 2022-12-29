import { request } from '@/utils/http'
import type { GetInfoResponse, LoginResponse } from './model/userTypes'

// 登录
export const reqLogin = (username: string, password: string) => {
  // <any, string>的第一个类型为any即可，实际不会用上
  // 第二个类型是返回值数据中data的类型，根据接口文档填写
  return request.post<any, LoginResponse>('/admin/acl/index/login', {
    username,
    password,
  })
}

// 登出
export const reqLogout = () => {
  // 注意: ajax请求的时候如果url地址写的是相对路径,那么相对路径相对的是当前发请求的html页面的url地址
  // http://localhost:3001/dev-api/admin/auth/index/login
  // 我们写的所有请求的路径,都写的相对路径,是为了直接将这些请求,发送给开发服务器,让开发服务器进行转发,发送给目标服务器,从而解决跨域问题
  return request.post<any, null>('/admin/auth/index/logout')
}

// 查询用户信息
export const reqGetInfo = () => {
  return request.get<any, GetInfoResponse>('/admin/acl/index/info')
}
