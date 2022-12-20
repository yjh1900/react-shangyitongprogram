import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import zsSlice, { asyncCount } from './redux/zsSlice'
const { add, sub } = zsSlice.actions
export default function Count() {
  const count = useSelector((state) => {
    // 这里的state是redux的所有数据
    return state.zs.count
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
          dispatch(add(8))
        }}
      >
        +8
      </button>
      <button
        onClick={() => {
          dispatch(sub(3))
        }}
      >
        -3
      </button>
      <button
        onClick={() => {
          dispatch(asyncCount('xxx'))
        }}
      >
        async +
      </button>
    </div>
  )
}
