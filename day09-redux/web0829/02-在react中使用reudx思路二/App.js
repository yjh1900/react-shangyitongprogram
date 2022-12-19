import React, { useState, useEffect } from 'react'
import Count from './components/Count'
import Msg from './components/Msg'
import Test from './components/Test'
import withFar from './Far'
const WithCount = withFar(Count) // WithCount其实是Far组件,但是他的子组件确定是Count
const WithMsg = withFar(Msg) // WithMsg其实是Far组件,但是他的子组件确定是Msg
export default function App() {
  return (
    <div>
      App
      <hr />
      <WithCount></WithCount>
      <WithMsg></WithMsg>
      <Test></Test>
    </div>
  )
}
