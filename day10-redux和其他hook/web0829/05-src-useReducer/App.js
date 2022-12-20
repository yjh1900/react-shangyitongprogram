import React, { useReducer } from 'react'
const initState = { count: 0, msg: 'hello' }
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        count: state.count + action.payload,
      }
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <div>
      App,
      {state.count}, {state.msg}
      <button
        onClick={() => {
          dispatch({ type: 'add', payload: 4 })
        }}
      >
        +
      </button>
    </div>
  )
}
