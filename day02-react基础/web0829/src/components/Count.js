import React, { Component } from 'react'
// 类是构造函数的语法糖
export default class Count extends Component {
  constructor() {
    super()
    // 构造器中的this一定是组件实例
    this.c = 1 //c是私有数据,但是不是状态
    // 这个才是状态
    this.state = { c: 1, msg: 'hello state' } //定义
  }
  render() {
    // render函数中的this一定是组件实例
    console.log('render执行了')
    return (
      <div>
        {/* 使用 */}
        <p>{this.state.c}</p>
        <p>{this.state.msg}</p>
        <button
          onClick={() => {
            // this.c++
            // console.log(this.c)
            // 修改
            //注意: setState执行是异步的
            // setState执行之后,把修改c的任务放到队列中,然后继续执行主线程的代码.主线程代码执行完毕之后,从队列中取出修改c的任务执行,当c的值被修改了之后,render函数重新执行,页面就看到最新的结果了
            // 作用: 1. 修改state数据 2. 让组件更新(render执行)
            this.setState({
              c: this.state.c,
            })

            console.log(this.state.c)
          }}
        >
          +
        </button>
        {/* <button
          onClick={() => {
            // this.c++
            // console.log(this.c)
            this.setState({
              msg: '123',
            })
          }}
        >
          修改msg
        </button> */}
      </div>
    )
  }
}
