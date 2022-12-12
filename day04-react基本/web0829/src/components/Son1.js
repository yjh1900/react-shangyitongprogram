import React, { Component } from 'react'
// Son1组件需要接收App传递的context数据

// 1. 拿到传递的context对象(注意: 传递数据的context对象和接收数据的context对象,必须是同一个)
import context from '../context'

// 2. 从context对象上解构组件Consumer
const { Consumer } = context

export default class Son1 extends Component {
  render() {
    return (
      // 3. 使用Consumer组件,子节点的位置插入回调函数.回调函数中返回组件本来的jsx解构.函数的形参可以接收到传递的context数据
      <Consumer>
        {(data) => {
          return <div>Son1,{data}</div>
        }}
      </Consumer>
    )
  }
}
