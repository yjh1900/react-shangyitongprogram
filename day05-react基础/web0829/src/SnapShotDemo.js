import React, { Component } from 'react'
import './SnapShotDemo.css'
export default class Count extends Component {
  state = {
    messages: [],
  }
  componentDidMount() {
    const arr = []
    this.timeid = setInterval(() => {
      if (arr.length >= 20) return clearInterval(this.timeid)
      arr.push('我和富婆的聊天内容: 哈哈' + arr.length)
      this.setState({
        messages: arr,
      })
    }, 1000)
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    // console.log(preState.messages, this.state.messages)
    // console.log(this.rootNode.scrollHeight)
    return this.rootNode.scrollHeight //当前dom对象内容的高度
  }
  componentDidUpdate(preProps, preState, snapshot) {
    // console.log('更新之前ul的高度:', snapshot)
    // console.log('更新之后ul的高度:', this.rootNode.scrollHeight)
    // console.log('内容滚动出去的距离:', this.rootNode.scrollTop)
    const currentHeight = this.rootNode.scrollHeight //新的内容高度
    const currentTop = this.rootNode.scrollTop
    this.rootNode.scrollTop = currentTop + (currentHeight - snapshot)
    // this.rootNode.scrollHeight = currentHeight + ()
  }
  render() {
    const { messages } = this.state
    return (
      <div>
        {/* 
          ref={(node) => (this.rootNode = node)} 
          ref的另一种写法. 值为函数,可以获取到当前标签的真实dom对象
        */}
        <ul className="box" ref={(node) => (this.rootNode = node)}>
          {messages.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}
