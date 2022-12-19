import React, { useState } from 'react'
import store from '../redux/store'
import useXxx from '../useXxx'
export default function Count() {
  // const [x, setX] = useState(0)
  useXxx()
  return (
    <div style={{ margin: 50 }}>
      <p>{store.getState().count}</p>
      <button
        onClick={() => {
          store.dispatch({ type: 'add' })
          // setX(x + 1)
        }}
      >
        +
      </button>
    </div>
  )
}
