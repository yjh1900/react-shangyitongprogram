import React from 'react'
import store from '../redux/store'
export default function Msg() {
  return (
    <div>
      {store.getState().msg}
      <button
        onClick={() => {
          store.dispatch({ type: 'setMsg' })
        }}
      >
        按钮
      </button>
    </div>
  )
}
