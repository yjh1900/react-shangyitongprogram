import React, { useState, useEffect } from 'react'
import Count from './components/Count'
import Msg from './components/Msg'
import Test from './components/Test'

import { connect } from 'react-redux'
/*
  function withFar(){
    return function Far(){

    }
  }


  function connect(){
    return ()=>{
      return function Far(){

      }
    }
  }


*/
// xxx这是函数,是在connect函数执行的时候被调用了,调用的时候,将redux中所有的数据,传递给了这个xxx函数的形参
function xxx(state) {
  // 返回的这个对象里面写了什么.则对象里面的内容会通过props传递给Count组件
  return {
    c: state.count,
  }
}
const WithCount = connect(xxx)(Count)
const WithMsg = connect((state) => ({ m: state.msg }))(Msg)
export default function App() {
  return (
    <div style={{ margin: 50 }}>
      App
      <hr />
      <WithCount></WithCount>
      <hr />
      <WithMsg></WithMsg>
      <hr />
      <Test></Test>
    </div>
  )
}
