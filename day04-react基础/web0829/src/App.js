import React, { Component } from 'react'
import Far from './components/Far'
// 使用context
// // 1. 创建context对象
// const context = React.createContext()
import context from './context'
// 2. 从context对象上,解构Provider组件
const { Provider } = context

export default class App extends Component {
  state = { money: '100万' }
  render() {
    // 3. 在需要传递数据的组件中,使用Provider组件,包裹当前App的所有jsx结构. Provider上必须写一个属性value.value的值就是要传递的数据
    return (
      <Provider value={this.state.money}>
        App
        <Far></Far>
      </Provider>
    )
  }
}
