import React from 'react'

// class Test extends React.Component {
//   render() {
//     return <div>test</div>
//   }
// }

// function Test() {
//   return <div>test</div>
// }

// const Test = React.forwardRef(function () {
//   return <div>test</div>
// })

const Test = React.forwardRef(function (props, refObj) {
  // props还是props数据
  // refObj是传递过来的ref对象
  console.log(props, refObj)
  return (
    <div>
      test
      <input type="text" id="one" ref={refObj} />
    </div>
  )
})

// refs
// 作用: 获取标签的dom对象
// const ref对象 = React.createRef()
// ref对象.current属性可以获取到div的真实dom

export default function App() {
  // return <div ref={ref对象}>App</div>
  // return <div ref={(node) => {}}>App</div>
  const ref = React.createRef()
  return (
    <>
      <Test ref={ref}></Test>
      <button
        onClick={() => {
          // console.log(ref.current)
          // 需求: 点击这个按钮,让Test组件里面的input标签获取焦点
          ref.current.focus()
        }}
      >
        按钮
      </button>
    </>
  )
}
