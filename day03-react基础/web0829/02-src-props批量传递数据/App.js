import React, { Component } from 'react'
import Test from './components/Test'

export default class App extends Component {
  state = { money: '100元', xxx: 1, yyy: 2, zzz: 3 }
  render() {
    return (
      <div id="app">
        {/* 传递:  */}
        {/* 需求: 要求把App里面的状态数据,一个一个的传递个Test组件 */}
        <Test
          // aaa={this.state.money}
          // bbb={this.state.xxx}
          // ccc={this.state.yyy}
          // ddd={this.state.zzz}
          {...this.state}
        ></Test>
      </div>
    )
  }
}
