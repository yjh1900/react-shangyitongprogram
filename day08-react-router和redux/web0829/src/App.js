import React from 'react'
// Route是专门用来定义前端路由规则的. Route必须被Routes包裹
// 注意: 组件(页面)要渲染到哪里,则Routes和Route就写在哪里
// 一个Route定义一条前端路由规则.所以有几个页面(就应该定义几个Route).当然未来我们写的复杂了之后,可以一个页面,要写多个Route

// Link的作用: 修改浏览器地址的路径,但是不发送请求
import { Routes, Route, Link, NavLink, useRoutes } from 'react-router-dom'
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
      {useRoutes([
        {
          path: 'home',
          element: <Home></Home>,
          children: [
            {
              path: 'test1',
              element: <Test1></Test1>,
            },
            {
              path: 'test2',
              children: [
                {
                  path: ':xxx',
                  element: <Test2></Test2>,
                },
                {
                  path: '',
                  element: <Test2></Test2>,
                },
              ],
            },
          ],
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
      ])}
      <hr />
    </div>
  )
}
