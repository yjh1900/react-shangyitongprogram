import React, { useRef } from 'react'
import Test from './Test'
export default function App() {
  const appRef = useRef()
  return (
    <div>
      <button
        onClick={() => {
          console.log(appRef.current)
          appRef.current.xxx()
          appRef.current.style.backgroundColor = 'green'
        }}
      >
        点击按钮,要让Test组件里面的input获取焦点
      </button>
      <Test ref={appRef}></Test>
    </div>
  )
}
