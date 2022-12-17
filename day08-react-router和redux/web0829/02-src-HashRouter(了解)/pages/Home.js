import React, { useEffect } from 'react'
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom'
import Test1 from './Test1'
import Test2 from './Test2'
export default function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  useEffect(() => {
    console.log('home挂载了')
    return () => {
      console.log('home卸载')
    }
  }, [])
  return (
    <div>
      首页
      <hr />
      {/* 注意: Link或NavLink写路径的时候,/ 还是不要简写 */}
      <NavLink to="/home/test1">test1</NavLink>
      {/* 99就是要传递的路由参数 */}
      <NavLink to="/home/test2/99?name=zs&age=18" state={{ xxx: 123 }}>
        test2
      </NavLink>
      <p>这是首页</p>
      {/* 这个组件的作用: 决定了当前组件的嵌套路由组件渲染在哪里 */}
      <Outlet></Outlet>
      <p>这是首页结束</p>
      <button
        onClick={() => {
          navigate('/home/test2')
        }}
      >
        跳转到test2.并传递路由参数
      </button>
    </div>
  )
}
