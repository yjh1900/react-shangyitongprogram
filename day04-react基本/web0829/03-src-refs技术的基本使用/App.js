import React, { Component } from 'react'
// 使用refs技术：
// 1. 创建ref对象
const ref = React.createRef()
console.log(ref)
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 2. 使用ref对象和需要获取真实dom的标签进行绑定. 一旦input标签的真实dom创建完毕,react内部会自动将input的真实dom地址赋值给ref对象的current属性 */}
        <input type="text" ref={ref} />
        <span>1</span>
        <span>3</span>
        <span>2</span>
        <br />
        <button
          onClick={(e) => {
            //需求: 点击按钮,需要获取到input的真实dom
            // 3. 获取
            console.log(ref.current)
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
