import React, { Component } from 'react'
// 类是构造函数的语法糖

export default class Count extends Component {
  constructor() {
    super()
    this.state = { c: 1, msg: 'hello state' }

    this.handle = this.handle.bind(this)
  }

  // handle是添加到了原型上
  handle() {
    this.setState({
      c: this.state.c + 1,
    })
  }
  render() {
    // render函数中的this一定是组件实例
    return (
      <div>
        {/* 使用 */}
        <p>{this.state.c}</p>
        <button onClick={this.handle}>+</button>
      </div>
    )
  }
}
