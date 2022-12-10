import React, { Component } from 'react'

export default class Test extends Component {
  
  render() {
    console.log('render', this.props)
    return <div>Test</div>
  }
}

// import React from 'react'

// export default function Test(props) {
//   // console.log(props)
//   // props.xxx = 1231231
//   // props.yyy.name = 'ls' 注意: 如果修改的是复杂数据类型里面的值,react是检查不到的
//   return (
//     <div>
//       Test,{props.xxx},{props.yyy.name}
//       <hr />
//       {/* 渲染标签 */}
//       {props.zzz}
//       {/* 渲染组件 */}
//       <props.aaa></props.aaa>
//       {/* 渲染组件实例 */}
//       {props.bbb}
//     </div>
//   )
// }
