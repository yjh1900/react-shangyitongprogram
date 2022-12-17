import React from 'react'
import { useParams, useSearchParams, useLocation } from 'react-router-dom'

export default function Test2() {
  const location = useLocation()
  // params路由参数的对象
  const params = useParams()
  // query是查询字符串的对象, setQuery是修改地址栏查询字符串的方法
  const [query, setQuery] = useSearchParams()
  console.log(params)
  console.log(query) //直接打印没有数据.需要执行get方法.和formdata是一样的
  console.log(query.get('name'))
  console.log(query.get('age'))
  console.log(location)
  return (
    <div>
      Test2,
      <button
        onClick={() => {
          setQuery('name=ls&age=30')
        }}
      >
        按钮
      </button>
    </div>
  )
}
