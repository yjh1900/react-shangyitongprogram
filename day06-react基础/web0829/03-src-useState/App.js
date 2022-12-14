// 引入hook
import React, { useState } from 'react'

export default function App() {
  console.log('app执行了')
  // count就是状态数据,setCount是修改状态数据的方法
  // 注意: 当前组件中有多少个状态数据,就应该调用多少次useState
  // const [数据,修改数据的方法] = useState(初始值)
  // 注意: 初始值只在App第一次执行的时候生效
  // 常量count和msg, 是每一次app函数执行,重新创建出来的
  // 注意: useState已经帮我们处理了性能优化,当状态数据不再变化的时候,组件不会更新了
  const [count, setCount] = useState(1)
  const [msg, setMsg] = useState('hello')
  return (
    <div>
      App
      {count}, {msg}
      <button
        onClick={() => {
          // setCount里面传入的是目标数据
          setCount(count + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // setCount里面传入的是目标数据
          setMsg('hook') //类似setState 也是异步的
          console.log(msg)
        }}
      >
        修改msg
      </button>
    </div>
  )
}
