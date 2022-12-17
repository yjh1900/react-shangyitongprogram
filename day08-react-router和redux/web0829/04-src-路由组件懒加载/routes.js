// 这个文件中定义路由表
import React, { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import Loading from './components/loading'
// 在所有的模块化中,如果要引入的是某个文件夹里面的index.js.则引入的路径只需要写到文件夹即可. 模块化规范会自动引入这个文件夹里面的index.js
// import Home from './pages/Home'
// import About from './pages/About'
// import News from './pages/News'
// import Message from './pages/Message'
// import Detail from './pages/Detail'
// import UnKnow from './pages/404'

// 懒加载的方式:
// React.lazy负责懒加载
// import() 负责代码分割
// 注意: 不是所有的组件都需要懒加载.基本上路由组件都要懒加载.其他的组件没必要
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const News = React.lazy(() => import('./pages/News'))
const Message = React.lazy(() => import('./pages/Message'))
const Detail = React.lazy(() => import('./pages/Detail'))
const UnKnow = React.lazy(() => import('./pages/404'))

function load(Comp) {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Comp></Comp>
    </Suspense>
  )
}
export default [
  // 配置默认路由  默认路由的路径/
  {
    path: '/',
    element: load(Home),
  },
  {
    path: 'home',
    element: load(Home),
    children: [
      {
        path: 'news',
        element: load(News),
      },
      {
        path: 'message',
        element: load(Message),
        children: [
          {
            path: 'detail',
            children: [
              {
                path: ':id',
                element: load(Detail),
              },
              {
                path: '',
                element: load(Detail),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'about',
    element: load(About),
  },
  {
    path: '404',
    element: load(UnKnow),
  },
  {
    path: '*',
    // Navigate作用: 只要这个组件被解析了,就会重定向到指定的路径
    element: <Navigate to="/404"></Navigate>,
  },
]
