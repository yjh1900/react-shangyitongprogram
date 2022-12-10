import React, { Component } from 'react'
import List from './components/List'

export default class App extends Component {
  render() {
    return (
      <div id="app">
        {/* <List
          list={[
            { id: 1, name: 'hj', info: 'lsp' },
            { id: 2, name: '张涛', info: 'lsp2' },
          ]}
        ></List> */}
        <List></List>
      </div>
    )
  }
}
