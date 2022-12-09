import React, { Component } from 'react'
// 类是构造函数的语法糖
export default class Count extends Component {
  constructor() {
    super()
    // 构造器中的this一定是组件实例
    // this.c = 1 //c是私有数据,但是不是状态
    // 这个才是状态
    this.state = { c: 1, msg: 'hello state' } //定义
  }
  render() {
    // render函数中的this一定是组件实例
    return (
      <div>
        {/* 使用 */}
        <p>{this.state.c}</p>
        <button
          onClick={() => {
            this.setState({
              c: this.state.c + 1,
            })
          }}
        >
          +
        </button>
      </div>
    )
  }
}
