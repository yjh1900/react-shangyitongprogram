import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './Header.css'
export default class Header extends Component {
  handle = (e) => {
    // 获取用户输入的内容
    const value = e.target.value.trim()
    //判断是否是回车键,以及文本框中是否有内容,如果两个有一个条件不满足,后续代码不执行
    if (e.keyCode !== 13 || !value) return

    // 把value传递给App
    // this.props.addTodo(value)
    PubSub.publish('add', value)
    // 清空文本框
    e.target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyDown={this.handle} />
      </div>
    )
  }
}
