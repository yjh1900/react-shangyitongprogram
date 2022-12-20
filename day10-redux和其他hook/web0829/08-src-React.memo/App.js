import React from 'react'
import Test from './Test'
export default class App extends React.Component {
  state = { count: 0 }
  render() {
    return (
      <div>
        App
        <button
          onClick={() => {
            this.setState({
              count: 1,
            })
          }}
        >
          按钮
        </button>
        <hr />
        <Test count={this.state.count}></Test>
      </div>
    )
  }
}
