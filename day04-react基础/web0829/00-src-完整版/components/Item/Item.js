import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  state = {
    tN: '',
  }
  render() {
    //从this.props上解构todo
    const {
      // 解构出来的todo,也是对象,继续解构
      todo: { id, todoName, isDone },
      delTodo,
      updateTodo,
      id: editId,
      editToggle,
      editDone,
    } = this.props

    const { tN } = this.state

    return (
      <li>
        {editId !== id ? (
          <label>
            {/* 当表单元素的值被控制,则必须要写一个onChange.否则会警告 */}
            <input
              type="checkbox"
              checked={isDone}
              onChange={function (e) {
                // console.log(e.target.checked) e.target.checked可以获取到目标值
                updateTodo(id, e.target.checked)
              }}
            />
            <span className={isDone ? 'active' : ''}>{todoName}</span>
          </label>
        ) : (
          <input
            type="text"
            value={tN}
            onChange={(e) => {
              this.setState({
                tN: e.target.value.trim(),
              })
            }}
            onKeyDown={(e) => {
              if (e.keyCode !== 13 || !tN) return
              editDone(tN)
            }}
            ref={(node) => {
              this.inp = node
            }}
          />
        )}
        <button
          className="btn btn-danger"
          onClick={() => {
            delTodo(id)
          }}
        >
          删除
        </button>
        <button
          className="btn btn-danger"
          style={{
            backgroundColor: 'skyblue',
            border: 'none',
            marginRight: 10,
          }}
          onClick={(e) => {
            editToggle(id, e.target.innerText)
            this.setState({
              tN: todoName,
            })
          }}
        >
          {editId !== id ? '编辑' : '取消'}
        </button>
      </li>
    )
  }
}
