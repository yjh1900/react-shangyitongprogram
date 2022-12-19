import React from 'react'
import store from '../redux/store'
export default function Msg({ m, dispatch }) {
  return (
    <div>
      {m}
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
