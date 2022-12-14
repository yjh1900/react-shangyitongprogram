import React from 'react'
import './Item.css'
export default function Item() {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>xxx</span>
      </label>
      <button className="btn btn-danger">删除</button>
    </li>
  )
}
