import React, { Component } from 'react'
import Far from './Far'
import Registe from './Registe'
import Login from './Login'
export default class App extends Component {
  render() {
    return (
      <div>
        <Far xxx={Login}></Far>
        <Far xxx={Registe}></Far>
      </div>
    )
  }
}
