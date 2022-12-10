import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  allToggle = (e) => {
    // console.log(e.target.checked)
    // 将目标值传递给App
    this.props.allCheck(e.target.checked)
  }
  render() {
    const { todos } = this.props
    // 任务总数
    const allTotal = todos.length
    // 已完成任务数
    const doneTotal = todos.filter((item) => item.isDone).length
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={allTotal === doneTotal}
            onChange={this.allToggle}
          />
        </label>
        <span>
          <span>已完成 {doneTotal}</span> / 全部 {allTotal}
        </span>
        <button
          className="btn btn-danger"
          // onClick={() => {
          //   this.props.clearAllDone()
          // }}
          onClick={this.props.clearAllDone}
        >
          清除已完成任务
        </button>
      </div>
    )
  }
}
