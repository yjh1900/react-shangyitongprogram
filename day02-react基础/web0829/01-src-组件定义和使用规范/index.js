import React from 'react'
// 16.8 / 17
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'

import App from './App'

// 定义类组件
// 1. 组件名首字母大写
// 2. 必须继承React.Component
// 3. 必须写render函数
// 4. render函数中必须return   return的是jsx或null
// class Test extends React.Component {
//   render() {
//     return <div>test</div>
//   }
// }

// 函数组件
// 1. 首字母大写
// 2. 必须写return return后面是jsx或null
// function Demo() {
//   return <div>demo</div>
// }

//使用组件
//<Test></Test>
// <Test />

// 16.8/17 ReactDOM.render(div, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // 使用组件的代码写在哪里,则组件中的jsx结构就渲染在哪里
  <App></App>
  // // 开启严格模式
  // <React.StrictMode></React.StrictMode>
)
