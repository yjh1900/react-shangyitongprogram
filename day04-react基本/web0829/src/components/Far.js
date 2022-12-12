import React, { Component } from 'react'
import Son from './Son'
import Son1 from './Son1'
// 接收context数据的另一种方式
// 1. 引入context对象
import context from '../context'
// 2. 给需要接收context数据的组件,添加静态属性contextType.值就是context对象
export default class Far extends Component {
  static contextType = context
  render() {
    // 3. 打印数据
    // 一旦当前组件有静态属性contextType并且值为context对象.则当前组件实例的context属性,就可以拿到传递的数据
    console.log('far', this.context)
    return (
      <div>
        Far
        {this.context}
        <hr />
        <Son></Son>
        <Son1></Son1>
      </div>
    )
  }
}
