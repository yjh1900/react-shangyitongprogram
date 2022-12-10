import React, { Component } from 'react'
import List from './components/List'

export default class App extends Component {
  state = { money: '100元', xxx: 1, yyy: 2, zzz: 3 }
  render() {
    return (
      <div id="app">
        <List></List>
      </div>
    )
  }
}
