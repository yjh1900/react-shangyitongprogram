import React, { Component } from 'react'
import Test from './compoennts/Test'
import Demo from './compoennts/Demo'
// 注意: 定义组件时,其实组件名叫什么不重要.但是使用组件时,组件名首字母必须大写.因为react就是通过首字母是否大写来判断是组件还是普通的标签
export default class index extends Component {
  render() {
    return (
      <div id="app">
        App
        <Test></Test>
        <Test></Test>
        <Test></Test>
        <Test></Test>
        <hr />
        <Demo></Demo>
      </div>
    )
  }
}

/*
react.js 

export default React
React.Component = Component
export {Component}


*/
