import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    const { todos, delTodo, updateTodo, id, editToggle, editDone } = this.props
    return (
      <ul className="todo-main">
        {todos.map((item) => {
          return (
            <Item
              key={item.id}
              todo={item}
              delTodo={delTodo}
              updateTodo={updateTodo}
              id={id}
              editToggle={editToggle}
              editDone={editDone}
            ></Item>
          )
        })}
        {/* [<Item todo={{tn:'吃饭'}} ></Item>,<Item todo={{tn:'睡觉'}}></Item>,<Item todo={{tn:'学习'}}></Item>] */}
      </ul>
    )
  }
}
