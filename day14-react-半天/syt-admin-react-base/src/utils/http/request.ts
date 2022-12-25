import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'antd'

interface ResponseData<T> {
  code: number
  data: T
  message: string
}

const request = axios.create({
  // baseURL的作用: 使用axios实例发出去的所有请求,baseURL的值都会和具体请求的路径进行拼接,baseURL在前面
  baseURL: process.env.REACT_APP_API, // '/dev-api' 或 '/prod-api'
  timeout: 10000,
  headers: {},
})

// 请求拦截器函数：发送请求之前触发的函数
request.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token')
  // 携带token
  if (token) {
    ;(config.headers as any).token = token
  }
  return config
})

// 响应拦截器函数：得到响应之后触发的函数
request.interceptors.response.use(
  (response: AxiosResponse<ResponseData<any>>) => {
    if (response.data.code === 200) {
      return response.data.data
    } else {
      message.error(response.data.message)
      return Promise.reject(response.data.message)
    }
  },
  (error) => {
    message.error(error)
    return Promise.reject(error)
  }
)

export default request
