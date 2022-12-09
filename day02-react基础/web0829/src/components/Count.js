import React, { Component } from 'react'
// 类是构造函数的语法糖

export default class Count extends Component {
  constructor() {
    super()
    this.state = { c: 1, msg: 'hello state' }
  }

  handle = () => {
    this.setState({
      c: this.state.c + 1,
      msg: '123',
    })
    // this.setState({
    //   c: this.state.c + 2,
    // })
    // this.setState({
    //   c: this.state.c + 3,
    // })

    // 合并
    // this.setState({
    // c: this.state.c + 1,
    // msg: '123',
    // c: this.state.c + 2,
    // c: this.state.c + 3,
    // })

    // this.setState((state) => {
    //   // 函数的触发时机: 上一次的state修改完毕之后
    //   // console.log(state)
    //   return {
    //     c: state.c + 2,
    //   }
    // })
    this.setState(
      (state) => {
        // 函数的触发时机: 上一次的state修改完毕之后
        console.log(state.c, document.getElementById('p').innerText)
        return {
          c: state.c + 3,
        }
      },
      () => {
        // 当数据修改完毕,并且页面更新完毕执行
        console.log(this.state, document.getElementById('p').innerText)
      }
    )
  }
  render() {
    // render函数中的this一定是组件实例
    return (
      <div>
        {/* 使用 */}
        <p id="p">{this.state.c}</p>
        <p>{this.state.msg}</p>
        <button onClick={this.handle}>+</button>
      </div>
    )
  }
}
