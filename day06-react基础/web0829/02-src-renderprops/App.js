import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'
import Far from './Far'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓海静</h1>
        {/* <Mouse></Mouse>
        <Cat></Cat> */}
        <Far
          children={(state) => {
            // state就是Far组件里面的状态,需要传递给子组件,所以通过props批量传递下去
            return <Mouse {...state}></Mouse>
          }}
        ></Far>
        {/* 注意: props的children属性是可以简写的 */}
        <Far>
          {(state) => {
            return <Cat {...state}></Cat>
          }}
        </Far>
      </div>
    )
  }
}
