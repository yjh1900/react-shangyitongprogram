import React, { Component } from 'react'
import Test from './components/Test'
export default class App extends Component {
  state = {
    flag: true,
  }
  render() {
    return (
      <div>
        App
        {this.state.flag && <Test></Test>}
        <button
          onClick={() => {
            this.setState({
              flag: false,
            })
          }}
        >
          让Test销毁
        </button>
      </div>
    )
  }
}
