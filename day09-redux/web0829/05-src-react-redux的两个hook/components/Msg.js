import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
          dispatch({ type: 'setMsg' })
        }}
      >
        按钮
      </button>
    </div>
  )
}
