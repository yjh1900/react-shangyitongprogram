import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import './App.css'
export default function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todolist')) || []
  )

  console.log('app的状态todos', todos)
  // 挂载的时候,订阅.卸载的时候,清除订阅
  useEffect(() => {
    const addId = PubSub.subscribe('add', (topic, todoName) => {
      // 根据任务名创建任务对象

      // setTodos(newTodos)
      setTodos((todos) => {
        // 这个todos一定是正确的最新的todos
        const todo = {
          todoName,
          isDone: false,
          // id的要求: 必须是整数,并且不能和已有的数据的id重复
          // 新的id是数组中最后一条数据的id+1
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        }
        console.log('添加订里面的todos', todos)
        const newTodos = [...todos]
        newTodos.push(todo)
        return newTodos 
      })
    })
    return () => {
      PubSub.unsubscribe(addId)
    }
  }, [])
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>
        <div>
          <List>
            {todos.map((item) => (
              <Item key={item.id} todo={item}></Item>
            ))}
          </List>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
