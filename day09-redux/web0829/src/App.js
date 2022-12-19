import React, { useState, useEffect } from 'react'
import Count from './components/Count'
import Msg from './components/Msg'
import store from './redux/store'
export default function App() {
  const [xxxx, setxxxx] = useState('abc')

  // app需要监听redux数据的变化,如果redux数据变化了,则让app跟新,从而导致app的子组件也更新

  useEffect(() => {
    store.subscribe(() => {
      console.log('redux数据发生变化了', store.getState())
      setxxxx((xxxx) => {
        return xxxx + 22
      })
    })
  }, [])

  return (
    <div>
      App
      <hr />
      <Count></Count>
      <Msg></Msg>
    </div>
  )
}
