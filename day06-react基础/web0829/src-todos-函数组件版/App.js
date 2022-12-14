import React from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import './App.css'
export default function App() {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>
        <div>
          <List></List>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
