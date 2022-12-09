import React from 'react'
// 16.8 / 17
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'

const div = (
  <div>
    <h1>和哈哈</h1>
  </div>
)

// 16.8/17 ReactDOM.render(div, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  div
  // // 开启严格模式
  // <React.StrictMode></React.StrictMode>
)
