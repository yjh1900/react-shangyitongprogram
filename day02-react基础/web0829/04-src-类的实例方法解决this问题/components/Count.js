import React, { Component } from 'react'
// 类是构造函数的语法糖

export default class Count extends Component {
  // constructor() {
  //   super()
  // this.state = { c: 1, msg: 'hello state' } //定义
  // 缺点: 每一个Count组件实例,都会创建一次handle
  // this.handle = () => {
  //   this.setState({
  //     c: this.state.c + 1,
  //   })
  // }
  // }

  // es7 新增了一个语法(类的实例方法) 其实就是构造器中this.handle=()=>{}的简写
  state = { c: 1, msg: 'hello state' }
  handle = () => {
    this.setState({
      c: this.state.c + 1,
    })
  }

  // handle是添加到了原型上
  // handle() {
  //   this.setState({
  //     c: this.state.c + 1,
  //   })
  // }
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
