import React, { useState } from 'react'
import store from '../redux/store'
export default function Count() {
  //   const [x, setX] = useState(0)
  return (
    <div style={{ margin: 50 }}>
      <p>{store.getState().count}</p>
      <button
        onClick={() => {
          store.dispatch({ type: 'add' })
          //   console.log(store.getState())
          //   setX(x + 1)
        }}
      >
        +
      </button>
    </div>
  )
}
