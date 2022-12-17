// 入口文件
// 引入react, 引入reactDom
// 导入的时候,根据导入的文件的类型,顺序有所区别
// 1. 第三方包
// 2. 自定义的
// 3. 样式文件/图片..
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'

// 引入根组件
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  //  BrowserRouter 的作用: 监听路径变化,当路径变化的时候,根据前端路由规则,展示视图
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
