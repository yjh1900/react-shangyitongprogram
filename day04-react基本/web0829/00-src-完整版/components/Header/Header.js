import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  handle = (e) => {
    // 判断是否是回车键,如果不是就什么都不干
    // 如果用户什么都没有写,直接按回车,也什么都不干
    const value = e.target.value.trim()
    if (e.keyCode !== 13 || !value) return
    // 将用户输入的任务名传递给App组件
    this.props.addTodo(value)
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
