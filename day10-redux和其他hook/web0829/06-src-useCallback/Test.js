import React, { useState, useCallback } from 'react'
export default function Test() {
  console.log('test渲染了')
  const [count, setCount] = useState(0)
  // const [xxx, setXXX] = useState(0)
  // 如果是空数组则回调函数只创建一次.如果不写第二个参数,或第二个参数监听数据,回调函数则创建多次
  const handle = useCallback(() => {
    setCount((count) => {
      return count + 1
    })
  }, [])
  return (
    <div>
      <div>{count}</div>
      <button onClick={handle}>按钮</button>
    </div>
  )
}
