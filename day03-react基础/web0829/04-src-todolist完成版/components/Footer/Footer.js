import React, { Component } from 'react'
// import Pubsub from 'pubsub-js'
import './Footer.css'
export default class Footer extends Component {
  render() {
    const { todos, allCheckHandle,clearAllDone } = this.props
    // 根据数据,动态计算已完成的任务个数和任务总数
    const allTotal = todos.length
    const doneTotal = todos.filter((item) => item.isDone).length
    return (
      <div className="todo-footer">
        <label>
          {/* 点击全选按钮,如果所有的数据都处于选中的状态,则接下来所有的数据都要变成不选中. 如果所有数据中有一个未选中,则接下来所有的数据都要变成选中 */}
          <input
            type="checkbox"
            checked={allTotal === doneTotal}
            onChange={allCheckHandle}
          />
        </label>
        <span>
          <span>已完成 {doneTotal}</span> / 全部 {allTotal}
        </span>
        <button className="btn btn-danger" onClick={clearAllDone}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
