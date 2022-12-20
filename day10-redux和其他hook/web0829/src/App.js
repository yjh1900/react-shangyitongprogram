import React, { useState, useEffect } from 'react'
import Count from './components/Count'
import Msg from './components/Msg'

export default function App() {
  return (
    <div style={{ margin: 50 }}>
      App
      <hr />
      <Count></Count>
      <hr />
      <Msg></Msg>
    </div>
  )
}
