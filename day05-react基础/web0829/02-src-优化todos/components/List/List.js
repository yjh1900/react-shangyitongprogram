import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  constructor() {
    super()
    console.log('list开始挂载了')
  }
  render() {
    const { deleteTodo, updateEditId, editTodoName } = this.props

    return (
      <ul className="todo-main">
        {this.props.todos.map((item) => {
          return (
            <Item
              key={item.id}
              todo={item}
              deleteTodo={deleteTodo}
              updateEditId={updateEditId}
              editTodoName={editTodoName}
            ></Item>
          )
        })}
        {/* [<Item todo={{todoName:'吃饭'}}/>, <Item todo={{todoName:'睡觉'}}/>] */}
      </ul>
    )
  }

  componentDidMount() {
    console.log('list挂载完毕了')
  }
}
