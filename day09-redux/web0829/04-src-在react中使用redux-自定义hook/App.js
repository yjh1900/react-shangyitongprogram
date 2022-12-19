import React, { useState, useEffect } from 'react'
import Count from './components/Count'
import Msg from './components/Msg'
import store from './redux/store'
export default function App() {
  return (
    <div>
      App
      <hr />
      <Count></Count>
      <Msg></Msg>
    </div>
  )
}
