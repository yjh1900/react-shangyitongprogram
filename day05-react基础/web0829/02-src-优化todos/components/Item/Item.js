import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import context from '../../context'
import './Item.css'
export default class Item extends Component {
  constructor() {
    super()
    console.log('item开始挂载了')
  }
  // 3.1 给Item组件定义状态.这个状态的值是什么,则编辑的文本框的内容就是什么
  state = {
    tN: '',
  }
  updateHandle = (e) => {
    // console.log(e.target.checked) 可以获取到目标值
    // 将要修改的那条数据的id传递给App组件
    // this.props.updateTodo(this.props.todo.id)
    PubSub.publish('update', this.props.todo.id)
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
    // 3.4 点击编辑按钮的时候,修改tN的值,tN的值变化了,则文本框的值也会发生变化.就实现了展示任务名的操作
    this.setState({
      tN: this.props.todo.todoName,
    })
  }

  // 修改任务名的函数
  updateTodoName = (e) => {
    // 判断是否是回车,以及文本框的内容是否为空
    const value = e.target.value.trim()
    if (e.keyCode !== 13 || !value) return
    // 修改App中指定某一条数据的todoName
    // 参数: id  todoName(value或tN)
    const id = this.props.todo.id
    this.props.editTodoName(id, value)
  }
  render() {
    const { tN } = this.state
    const {
      todo: { id, todoName, isDone },
    } = this.props

    return (
      <context.Consumer>
        {(editId) => {
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
                // 3.2 使用tN状态给value属性赋值.让tN控制input的value值
                <input
                  type="text"
                  value={tN}
                  // 3.3 绑定onChange事件,让用户输入的内容可以在文本框中显示
                  onChange={(e) => {
                    // console.log(e.target.value)
                    this.setState({
                      tN: e.target.value.trim(),
                    })
                  }}
                  // 4.1 给编辑的文本框注册键盘事件.
                  onKeyDown={this.updateTodoName}
                />
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
        }}
      </context.Consumer>
    )
  }

  componentDidMount() {
    console.log('item挂载完毕了')
  }
}
