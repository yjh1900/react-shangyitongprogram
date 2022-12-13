import React, { Component, PureComponent } from 'react'
// Component和PureComponent的作用基本一致. 但是PureComponent内部自动帮我们实现了shouldComponentUpdate这个函数,自动帮我们判断了所有的props和state数据.所以我们就不用写shouldComponentUpdate了
// 注意: 虽然纯组件用起来很方便,但是纯组件只能判断基本数据类型.如果是复杂数据类型就判断不了
export default class Test extends Component {
  state = { msg: 'hello', obj: { name: 'zs' } }
  // 需求: 传递给test组件的数据变化,则test更新,没有变化则test不更新
  shouldComponentUpdate(nextProps, nextState) {
    // this.state和this.props拿到的是旧的数据

    //nextProps和nextState是新的数据
    // 注意: 其他生命周期钩子里面的this.state和this.props 其他都是新数据.只要在这里this.state和this.props是旧数据
    // console.log(nextProps, this.props)
    // if (nextProps.c === this.props.c) {
    //   return false
    // } else {
    //   return true
    // }
    return (
      nextProps.c !== this.props.c ||
      nextState.msg !== this.state.msg ||
      nextState.obj.name !== this.state.obj.name
    )
  }
  render() {
    console.log('test的render执行了')
    return (
      <div>
        Test, {this.props.c}, {this.state.msg}, {this.state.obj.name}
        <hr />
        <button
          onClick={() => {
            this.setState({
              msg: '嘿嘿嘿',
            })
          }}
        >
          test-按钮
        </button>
        <button
          onClick={() => {
            const newObj = { ...this.state.obj }
            newObj.name = 'ls'
            this.setState({
              obj: newObj,
            })
          }}
        >
          test-按钮-修改obj
        </button>
      </div>
    )
  }
}
