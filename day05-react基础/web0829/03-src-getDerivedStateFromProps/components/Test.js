import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    xxx: undefined,
  }
  // 作用: 当前组件的状态由外部传递的props决定
  static getDerivedStateFromProps(props, state) {
    // props 就是父组件传递过来的数据
    // state 当前组件自己的state
    console.log(props, state)
    return {
      xxx: props.aaa,
    }
  }
  render() {
    return <div>Test,{this.state.xxx}</div>
  }
}
