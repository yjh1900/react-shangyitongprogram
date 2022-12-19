import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Count() {
  const count = useSelector((state) => {
    // 这里返回的结果,会赋值给useSelector的返回值
    return state.count
  })

  const dispatch = useDispatch()
  return (
    <div style={{ margin: 50 }}>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch({ type: 'add' })
        }}
      >
        +
      </button>
    </div>
  )
}
