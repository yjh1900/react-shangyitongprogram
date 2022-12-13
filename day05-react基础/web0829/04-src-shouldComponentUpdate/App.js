import React, { Component } from 'react'
import Test from './components/Test'
export default class App extends Component {
  state = {
    c: 1,
  }
  render() {
    console.log('app的render执行了')
    return (
      <div>
        App
        <button
          onClick={() => {
            this.setState({
              c: 2,
            })
          }}
        >
          app-按钮
        </button>
        <Test c={this.state.c}></Test>
      </div>
    )
  }
}
