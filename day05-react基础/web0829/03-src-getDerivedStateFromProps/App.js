import React, { Component } from 'react'
import Test from './components/Test'
export default class App extends Component {
  render() {
    return (
      <div>
        App
        <Test aaa={'test'}></Test>
      </div>
    )
  }
}
