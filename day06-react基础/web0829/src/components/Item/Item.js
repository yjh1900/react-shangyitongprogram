import React from 'react'
import './Item.css'
export default function Item(props) {
  const { id, todoName, isDone } = props.todo
  return (
    <li>
      <label>
        <input type="checkbox" checked={isDone} onChange={() => {}} />
        <span className={isDone ? 'done' : ''}>{todoName}</span>
      </label>
      <button className="btn btn-danger">删除</button>
    </li>
  )
}
