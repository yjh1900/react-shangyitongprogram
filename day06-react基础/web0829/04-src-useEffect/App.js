// 引入hook
import React, { useState } from 'react'
import Test from './Test'
export default function App() {
  const [count, setCount] = useState(1)

  return (
    <div>
      App
      {count}
      <button
        onClick={() => {
          // setCount里面传入的是目标数据
          setCount(2)
        }}
      >
        +
      </button>
      <hr />
      <Test c={count}></Test>
      {/* {count === 1 && <Test></Test>} */}
    </div>
  )
}
