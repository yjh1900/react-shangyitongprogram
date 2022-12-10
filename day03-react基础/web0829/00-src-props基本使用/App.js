import React, { Component } from 'react'
import Test from './components/Test'
export default class App extends Component {
  state = { money: '100元' }
  render() {
    return (
      <div id="app">
        {/* 传递:  */}
        <Test xxx={this.state.money}></Test>
        {/* <Test></Test> */}
      </div>
    )
  }
}
