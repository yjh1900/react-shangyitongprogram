// 这个文件中定义路由表
import { Navigate } from 'react-router-dom'
// 在所有的模块化中,如果要引入的是某个文件夹里面的index.js.则引入的路径只需要写到文件夹即可. 模块化规范会自动引入这个文件夹里面的index.js
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Message from './pages/Message'
import Detail from './pages/Detail'
import UnKnow from './pages/404'

export default [
  // 配置默认路由  默认路由的路径/
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: 'home',
    element: <Home></Home>,
    children: [
      {
        path: 'news',
        element: <News></News>,
      },
      {
        path: 'message',
        element: <Message></Message>,
        children: [
          {
            path: 'detail',
            children: [
              {
                path: ':id',
                element: <Detail></Detail>,
              },
              {
                path: '',
                element: <Detail></Detail>,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'about',
    element: <About></About>,
  },
  {
    path: '404',
    element: <UnKnow></UnKnow>,
  },
  {
    path: '*',
    // Navigate作用: 只要这个组件被解析了,就会重定向到指定的路径
    element: <Navigate to="/404"></Navigate>,
  },
]
