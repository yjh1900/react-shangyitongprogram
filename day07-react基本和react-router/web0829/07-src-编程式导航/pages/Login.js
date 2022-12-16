import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  return (
    <div>
      登录页,
      <button
        onClick={() => {
          setTimeout(() => {
            // 回调执行即表示服务器响应登录成功
            //跳转到 首页
            // navigate('/目标路径',配置对象)
            navigate('/home', {
              replace: true, // 替换历史记录
            }) //默认是添加历史记录
            // navigate(-1) //返回上一个页面.类似于BOM中history.go方法
          }, 2000)
        }}
      >
        登录
      </button>
    </div>
  )
}
