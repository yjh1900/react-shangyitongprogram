import React, { useEffect } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Test1 from './Test1'
import Test2 from './Test2'
export default function Home() {
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
      <NavLink to="/home/test2">test2</NavLink>
      <p>这是首页</p>
      {/* 这个组件的作用: 决定了当前组件的嵌套路由组件渲染在哪里 */}
      <Outlet></Outlet>
      <p>这是首页结束</p>
    </div>
  )
}
