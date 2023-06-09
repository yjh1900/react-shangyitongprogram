import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  //  状态提升
  state = {
    // 5.2 获取本地缓存的数据,但是有可能没有数据,所以没有数据的时候设置为一个空数组
    todos: JSON.parse(localStorage.getItem('todolist')) || [],

    // 1.1 在app组件中定义一个状态.用来标记哪个Item组件需要展示文本框
    // 存储要展示文本框的id
    editId: undefined,
  }
  // 添加任务
  addTodo = (todoName) => {
    // 根据任务名,创建任务对象
    const todo = {
      id: Date.now(),
      todoName,
      isDone: false,
    }
    // 按照下面的方式去数据,是可以实现功能的.但是不推荐这么写.原因要在后面的性能优化部分讲解
    // this.state.todos.push(todo)
    // this.setState({
    //   todos:  this.state.todos
    // })

    // 推荐方式
    const newTodos = [...this.state.todos]
    newTodos.push(todo)
    this.setState({
      todos: newTodos,
    })
  }

  // 修改任务
  updateTodo = (id) => {
    // console.log(id)
    // 遍历state里面的todos数组,遍历的过程中,找到了指定的对象,修改对象里面的isDone即可
    const newTodos = this.state.todos.map((item) => {
      if (item.id === id) item.isDone = !item.isDone
      return item
    })

    this.setState({
      todos: newTodos,
    })
  }

  // 删除一条任务
  deleteTodo = (id) => {
    // 删除数组中的指定数据
    const newTodos = this.state.todos.filter((item) => item.id !== id)
    this.setState({
      todos: newTodos,
    })
  }
  // 点击全选复选框触发的函数
  allCheck = (target) => {
    // console.log(target)
    const newTodos = this.state.todos.map((item) => {
      item.isDone = target
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

  // 1.5 将传递过来的id,存储到editId中
  updateEditId = (id) => {
    this.setState({
      editId: id,
    })
  }

  // 4.2 定义函数,传递给Item.用来修改任务名
  editTodoName = (id, todoName) => {
    // 4.3 修改App中todos里面指定数据的任务名
    const newTodos = this.state.todos.map((item) => {
      // if (item.id === id) item.todoName = todoName
      item.id === id && (item.todoName = todoName)
      return item
    })
    this.setState({
      todos: newTodos,
      editId: undefined,
    })
  }
  render() {
    // 注意: 父组件更新,下面的所有的子级组件,都会更新
    const { todos, editId } = this.state

    // 5.1 本地缓存
    // 每一次修改完数据,都必须调用setState.数据修改完毕之后,一定都会执行render.所以直接在render中存储最新数据
    localStorage.setItem('todolist', JSON.stringify(todos))

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          {todos.length ? (
            <div>
              {/* 1.3 将editId,先传递给List,然后再经过List传递给Item */}
              <List
                todos={todos}
                updateTodo={this.updateTodo}
                deleteTodo={this.deleteTodo}
                editId={editId}
                updateEditId={this.updateEditId}
                editTodoName={this.editTodoName}
              ></List>
              <Footer
                todos={todos}
                allCheck={this.allCheck}
                clearAllDone={this.clearAllDone}
              ></Footer>
            </div>
          ) : (
            <h1>恭喜,暂无任务</h1>
          )}
        </div>
      </div>
    )
  }
}
