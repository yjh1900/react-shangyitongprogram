import React from 'react'
// Route是专门用来定义前端路由规则的. Route必须被Routes包裹
// 注意: 组件(页面)要渲染到哪里,则Routes和Route就写在哪里
// 一个Route定义一条前端路由规则.所以有几个页面(就应该定义几个Route).当然未来我们写的复杂了之后,可以一个页面,要写多个Route

// Link的作用: 修改浏览器地址的路径,但是不发送请求
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Test1 from './pages/Test1'
import Test2 from './pages/Test2'

import './App.css'
export default function App() {
  return (
    <div>
      App
      {/* to属性的值 也可以忽略/*/}
      {/* <NavLink
        to="home"
        className={({ isActive }) => {
          // 当我们切换路径的时候,这个回调会被执行
          // console.log(obj)
          // 这个函数中return的结果会赋值给className
          return isActive ? 'xxx' : ''
        }}
        end // 嵌套路由被选中了,则当前导航不会高亮了
      >
        首页
      </NavLink> */}
      <NavLink
        to="login"
        style={({ isActive }) => {
          return isActive
            ? { fontSize: 30, color: 'pink', background: 'none' }
            : {}
        }}
        replace // 默认NavLink和Link都是添加历史记录,但是写上replace之后就变成了替换历史记录
      >
        登录页
      </NavLink>
      <hr />
      {/* <Home></Home>
      <Login></Login> */}
      <Routes>
        {/* home的路由是一级路由 */}
        {/* 一级路由的路由规则写在哪里,则一级路由的组件就渲染在哪里 */}
        <Route path="home" element={<Home></Home>}>
          {/* 如果嵌套路由的路径要简写,则无需写父级的路径.react-router-dom会自动帮我们拼接 */}
          <Route path="test1" element={<Test1></Test1>}></Route>
          {/*定义路由参数
           注意: /后面有:则:后面的就是路由参数. 路由参数定义了就必须传  */}
          {/* <Route path="test2/:xxx" element={<Test2></Test2>}></Route> */}

          {/* 如果路由参数是可选的.则要按照下面的方式书写: */}
          <Route path="test2">
            <Route path=":xxx" element={<Test2></Test2>}></Route>
            <Route path="" element={<Test2></Test2>}></Route>
          </Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
      <hr />
    </div>
  )
}
