import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          ref={(node) => {
            // ref指向的回调函数,会在input的真实dom创建完毕之后,自动调用
            // console.log(node)
            this.xxx = node
          }}
        />
        <span>1</span>
        <span>3</span>
        <span>2</span>
        <br />
        <button
          onClick={(e) => {
            //需求: 点击按钮,需要获取到input的真实dom
            console.log(this.xxx)
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
