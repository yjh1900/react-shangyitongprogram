import React, { Component } from 'react'
import Test from './components/Test'

function Demo() {
  return <h2>demo组件</h2>
}
export default class App extends Component {
  state = { money: '100元' }
  render() {
    return (
      <div id="app">
        {/* 传递:  */}
        <Test
          xxx={this.state.money}
          yyy={{ name: 'zs' }}
          // 传递标签
          zzz={<h1>哈哈</h1>}
          // 传递组件
          aaa={Demo}
          //传递组件
          bbb={<Demo></Demo>}
        ></Test>
        {/* <Test></Test> */}
      </div>
    )
  }
}
