import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import zsSlice, { asyncCount } from './redux/zsSlice'
// import store from '../../store'
import { useAppDispatch, useAppSelector } from '../../hooks'
const { add, sub } = zsSlice.actions

// 这个类型是用来描述dispatch函数的.表示dispatch调用的时候,即可以传入对象也可以传入函数
// export type AppDispatch = typeof store.dispatch
// // typeof store.getState 只在ts编译成js的时候执行
// export type RootState = ReturnType<typeof store.getState>
// interface Istate {
//   zs: {
//     count: number
//   }
// }

export default function Count() {
  const count = useAppSelector((state) => {
    // 这里的state是redux的所有数据
    return state.zs.count
  })

  const dispatch = useAppDispatch()
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
          dispatch(asyncCount())
        }}
      >
        async +
      </button>
    </div>
  )
}
