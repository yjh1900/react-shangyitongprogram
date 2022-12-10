import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    const { updateTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {this.props.todos.map((item) => {
          return (
            <Item
              key={item.id}
              todo={item}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            ></Item>
          )
        })}
        {/* [<Item todo={{todoName:'吃饭'}}/>, <Item todo={{todoName:'睡觉'}}/>] */}
      </ul>
    )
  }
}
