import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      // React.Fragment可以充当jsx的根标签,并且最终不渲染到页面上
      // <React.Fragment>
      //   <h1>123</h1>
      //   <p>3e45</p>
      // </React.Fragment>
      // 简写:
      <>
        <h1>123</h1>
        <p>3e45</p>
      </>
    )
  }
}
