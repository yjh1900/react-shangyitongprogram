import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  render() {
    const { id, todoName, isDone } = this.props.todo
    return (
      <li>
        <label>
          {/* 注意: react中要求,一旦表单元素的值被控制,则必须要配合绑定onchange事件 */}
          <input type="checkbox" checked={isDone} onChange={() => {}} />
          <span className={isDone ? 'done' : ''}>{todoName}</span>
        </label>
        <button className="btn btn-danger">删除</button>
      </li>
    )
  }
}
