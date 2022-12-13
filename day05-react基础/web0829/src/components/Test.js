import React, { Component } from 'react'

export default class Test extends Component {
  constructor() {
    super()
    this.state = { c: 1 }
    console.log('constructor')
  }
  render() {
    console.log('render')
    return (
      <div>
        Test,{this.state.c},{' '}
        <button
          onClick={() => {
            // this.setState({
            //   c: 2,
            // })
            this.forceUpdate()
          }}
        >
          +
        </button>
      </div>
    )
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}
