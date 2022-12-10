import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  //  状态提升
  state = {
    todos: [
      {
        id: 1,
        todoName: '吃饭',
        isDone: false,
      },
      {
        id: 2,
        todoName: '睡觉',
        isDone: true,
      },
    ],
  }

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
  render() {
    // 注意: 父组件更新,下面的所有的子级组件,都会更新
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <div>
            <List todos={todos}></List>
            <Footer></Footer>
          </div>
        </div>
      </div>
    )
  }
}
