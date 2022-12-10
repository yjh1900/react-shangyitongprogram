import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  updateHandle = (e) => {
    // console.log(e.target.checked) 可以获取到目标值
    // 将要修改的那条数据的id传递给App组件
    this.props.updateTodo(this.props.todo.id)
  }

  delHandle = () => {
    this.props.deleteTodo(this.props.todo.id)
  }
  render() {
    // const { id, todoName, isDone } = this.props.todo
    const {
      todo: { id, todoName, isDone },
      updateTodo,
    } = this.props

    return (
      <li>
        <label>
          {/* 注意: react中要求,一旦表单元素的值被控制,则必须要配合绑定onchange事件 */}
          <input
            type="checkbox"
            checked={isDone}
            onChange={this.updateHandle}
          />
          <span className={isDone ? 'done' : ''}>{todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={this.delHandle}>删除</button>
      </li>
    )
  }
}
