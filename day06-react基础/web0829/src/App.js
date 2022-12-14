// 引入hook
import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(1)
  // if (true) {
  //   const [count, setCount] = useState(1)
  // }
  // for (let i = 0; i < 5; i++) {
  //   const [count, setCount] = useState(1)
  // }

  const fn = () => {
    // setCount里面传入的是目标数据
    // const [a, setA] = useState('123')
    setCount(2)
  }
  return (
    <div>
      App
      {count}
      <button onClick={fn}>+</button>
      <hr />
    </div>
  )
}

// import React, { Component, useState } from 'react'

// export default class App extends Component {
//   render() {
//     const [c, setC] = useState(0)
//     return <div>App</div>
//   }
// }
