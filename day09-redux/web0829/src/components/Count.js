import React, { useState } from 'react'
// import store from '../redux/store'
// Count的父组件,给Count自动传递了dispatch方法,所以我们可以直接使用.这个dispatch就是store.dispatch
export default function Count(props) {
  //   const [x, setX] = useState(0)
  console.log(props)
  return (
    <div>
      <p>{props.c}</p>
      <button
        onClick={() => {
          props.dispatch({ type: 'add' })
          //   console.log(store.getState())
          //   setX(x + 1)
        }}
      >
        +
      </button>
    </div>
  )
}
