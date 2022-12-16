import React from 'react'
// Route是专门用来定义前端路由规则的. Route必须被Routes包裹
// 注意: 组件(页面)要渲染到哪里,则Routes和Route就写在哪里
// 一个Route定义一条前端路由规则.所以有几个页面(就应该定义几个Route).当然未来我们写的复杂了之后,可以一个页面,要写多个Route

// Link的作用: 修改浏览器地址的路径,但是不发送请求
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
export default function App() {
  return (
    <div>
      App
      {/* Link写在哪里,就会渲染一个a标签 */}
      <Link to="/home">首页</Link>
      <Link to="/login">登录页</Link>
      <hr />
      {/* <Home></Home>
      <Login></Login> */}
      <Routes>
        {/* path表示路径, element表示页面(组件) 
          注意: path写的路径,按照标准写法,前面要加/ 
          element的值必须是组件的实例
        */}
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <hr />
    </div>
  )
}
