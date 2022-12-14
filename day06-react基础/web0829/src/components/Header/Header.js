import React from 'react'
import PubSub from 'pubsub-js'
import './Header.css'
export default function Header() {
  function handle(e) {
    const value = e.target.value.trim()
    if (e.keyCode !== 13 || !value) return

    // 将任务名传递给app
    PubSub.publish('add', value)

    // 清空文本框
    e.target.value = ''
  }
  return (
    <div className="todo-header">
      <input type="text" onKeyDown={handle} />
    </div>
  )
}
