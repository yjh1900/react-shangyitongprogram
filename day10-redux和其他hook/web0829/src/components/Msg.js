import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMsg } from '../redux/actions'
export default function Msg() {
  const msg = useSelector((state) => {
    return state.msg
  })
  const dispatch = useDispatch()
  return (
    <div>
      {msg}
      <button
        onClick={() => {
          dispatch(setMsg('1111'))
        }}
      >
        按钮1111
      </button>
      <button
        onClick={() => {
          dispatch(setMsg('yyyy'))
        }}
      >
        按钮yyyy
      </button>
    </div>
  )
}
