import React, { Component } from 'react'

export default class Far extends Component {
  state = {
    x: 0,
    y: 0,
  }

  handleMove = (e) => {
    // console.log(e)
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
  }
  render() {
    // this.props.render函数执行返回的结果就是Mouse或Cat组件实例.从而形成父子关系
    // 这里写的this.state是实参,会传递给Far组件上写的render所对应的函数的形参
    return this.props.render(this.state)
  }
}
