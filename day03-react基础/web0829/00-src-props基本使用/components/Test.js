// import React, { Component } from 'react'

// export default class Test extends Component {
//   render() {
//     console.log(this.props)
//     return <div>Test,{this.props.xxx}</div>
//   }
// }

import React from 'react'

export default function Test(props) {
  console.log(props)
  return <div>Test,{props.xxx}</div>
}
