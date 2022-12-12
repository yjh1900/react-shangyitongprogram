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

  //1.4 点击编辑按钮,将当前Item的id传递给app,让app将这个id赋值给editId
  setEditId = (e) => {
    // 将当前id,传递给app
    // this.props.updateEditId(this.props.todo.id)

    // 2.2 当点击了取消之后,要将editId的值改为undefined
    // if (e.target.innerText === '编辑') {
    //   this.props.updateEditId(this.props.todo.id)
    // } else {
    //   this.props.updateEditId(undefined)
    // }
    this.props.updateEditId(
      e.target.innerText === '编辑' ? this.props.todo.id : undefined
    )
  }
  render() {
    // const { id, todoName, isDone } = this.props.todo
    const {
      todo: { id, todoName, isDone },
      updateTodo,
      editId,
    } = this.props

    return (
      <li>
        {/* 1.2 判断当前app组件中的editId和当前Item的id是否一致,如果一致,则展示文本框,如果不一致,则展示复选框和任务名 */}
        {editId !== id ? (
          <label>
            {/* 注意: react中要求,一旦表单元素的值被控制,则必须要配合绑定onchange事件 */}
            <input
              type="checkbox"
              checked={isDone}
              onChange={this.updateHandle}
            />
            <span className={isDone ? 'done' : ''}>{todoName}</span>
          </label>
        ) : (
          <input type="text" />
        )}

        <button className="btn btn-danger" onClick={this.delHandle}>
          删除
        </button>
        <button
          className="btn "
          style={{
            backgroundColor: 'skyblue',
            border: '1px solid skyblue',
            color: '#fff',
            marginRight: 10,
          }}
          onClick={this.setEditId}
        >
          {/* 2.1 如果左侧出现文本框,则按钮文本显示取消. 否则展示编辑 */}
          {editId !== id ? '编辑' : '取消'}
        </button>
      </li>
    )
  }
}
