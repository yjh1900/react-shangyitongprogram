import React, { Component } from 'react'
import withForm from './Far'
import Registe from './Registe'
import Login from './Login'

const WithLogin = withForm(Login)
const WithRegiste = withForm(Registe)
export default class App extends Component {
  render() {
    return (
      <div>
        <WithLogin></WithLogin>
        <WithRegiste></WithRegiste>
      </div>
    )
  }
}
