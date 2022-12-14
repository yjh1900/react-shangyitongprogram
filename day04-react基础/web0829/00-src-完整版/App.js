import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  // 把多个组件都要用到的数据,定义在他们共同的父组件中.这个行为叫做状态提升
  state = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    id: undefined,
  }

  // app中定义的一个函数,将这个函数通过props传递给Header.在Header中调用这个函数,把要传递的数据,当做实参传递过来.这个函数通过形参接收
  addTodo = (todoName) => {
    // 根据任务名,创建任务对象
    const todo = {
      id: Date.now(),
      todoName,
      isDone: false,
    }
    // 往数组中添加新任务
    // this.state.todos.push(todo) 不建议这样写
    // 推荐写法: 根据旧数据,创建新数据
    const newTodos = [...this.state.todos]
    newTodos.push(todo)

    // 1. 修改todos的数据 2. 导致App中render函数重新执行
    // 注意: 父组件更新,默认会导致所有的子组件也更新
    this.setState({
      todos: newTodos,
    })
  }

  // 删除一个任务
  delTodo = (id) => {
    // 根据id,将todos里面的某个对象删除
    const newTodos = this.state.todos.filter((item) => item.id !== id)
    this.setState({
      todos: newTodos,
    })
  }

  // 修改一条任务的状态
  updateTodo = (id, isDone) => {
    const newTodos = this.state.todos.map((item) => {
      if (item.id === id) item.isDone = isDone
      return item
    })
    this.setState({
      todos: newTodos,
    })
  }

  // 全选按钮
  allCheckHandle = () => {
    // 先遍历我们的数据,查看是否所有的数据都选中了
    const isAllDone = this.state.todos.every((item) => item.isDone)
    // 如果isAllDone是true,那么所有的数据应该改成false. 否则,所有数据改成true
    const newTodos = this.state.todos.map((item) => {
      item.isDone = !isAllDone
      return item
    })

    this.setState({
      todos: newTodos,
    })
  }

  // 清除所有完成任务
  clearAllDone = () => {
    const newTodos = this.state.todos.filter((item) => !item.isDone)
    this.setState({
      todos: newTodos,
    })
  }

  //
  editToggle = (id, text) => {
    this.setState({
      id: text === '编辑' ? id : undefined,
    })
  }

  editDone = (todoName) => {
    const newTodos = this.state.todos.map((item) => {
      if (item.id === this.state.id) item.todoName = todoName
      return item
    })

    this.setState({
      todos: newTodos,
      id: undefined,
    })
  }

  render() {
    const { todos, id } = this.state
    // 每次修改数据,就一定会执行setState.就会导致render函数重新执行.所以这里解构的todos就是每一次修改修改之后的最新数据.本地缓存写在这里就可以
    localStorage.setItem('todos', JSON.stringify(todos))

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          {todos.length ? (
            <div>
              <List
                todos={todos}
                delTodo={this.delTodo}
                updateTodo={this.updateTodo}
                id={id}
                editToggle={this.editToggle}
                editDone={this.editDone}
              ></List>
              <Footer
                todos={todos}
                allCheckHandle={this.allCheckHandle}
                clearAllDone={this.clearAllDone}
              ></Footer>
            </div>
          ) : (
            <h1>恭喜你,暂无任务</h1>
          )}
        </div>
      </div>
    )
  }
}
