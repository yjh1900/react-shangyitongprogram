import React from 'react'
import ReactDOM from 'react-dom'
// 在入口文件中只引入根组件
import App from './App'
ReactDOM.render(
  <App></App>, //推荐使用根组件
  document.getElementById('root')
)
