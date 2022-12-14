import React, { Component } from 'react'
import withForm from './Far'
import Registe from './Registe'
import Login from './Login'
// WithLogin和WithRegiste其实就是Far组件
const WithLogin = withForm(Login)
const WithRegiste = withForm(Registe)
export default class App extends Component {
  render() {
    return (
      <div>
        <WithLogin xxx={1} yyy={2} zzz={3}></WithLogin>
        <WithRegiste></WithRegiste>
      </div>
    )
  }
}

console.log(App.name)
console.log(App.displayName)
