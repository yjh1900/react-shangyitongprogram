import React from 'react'
import store from '../redux/store'
import useXxx from '../useXxx'
export default function Msg() {
  useXxx()
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
