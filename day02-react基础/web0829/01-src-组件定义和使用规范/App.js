import React, { Component } from 'react'
import Test from './compoennts/Test'
import Demo from './compoennts/Demo'
export default class App extends Component {
  render() {
    return (
      <div id="app">
        App
        <Test></Test>
        <Test></Test>
        <Test></Test>
        <Test></Test>
        <hr />
        <Demo></Demo>
      </div>
    )
  }
}

/*
react.js 

export default React
React.Component = Component
export {Component}


*/
