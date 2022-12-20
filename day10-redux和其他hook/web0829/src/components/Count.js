import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, asyncAdd } from '../redux/actions'

export default function Count() {
  const count = useSelector((state) => {
    // 这里返回的结果,会赋值给useSelector的返回值
    return state.count
  })

  const dispatch = useDispatch()
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(add(1))
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(add(8)) // {type: 'add', payload}
        }}
      >
        +8
      </button>
      <button
        onClick={() => {
          
          dispatch(asyncAdd())
        }}
      >
        async + 2
      </button>
    </div>
  )
}
