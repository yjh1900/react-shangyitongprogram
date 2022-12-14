import React, { useEffect } from 'react'

export default function Test(props) {
  // 挂载,更新和卸载
  // 1.默认情况:
  // 外层函数模拟componentDidMount和componentDidUpdate
  // 内部函数模拟componentWillUnmount
  // 2. 第二个参数是空数组:
  // 外层函数模拟componentDidMount
  // 内部函数模拟componentWillUnmount
  // 3. 第二个参数是数组,但是数据中监听了状态或props数据.则监听的数据发生变化,外层模拟更新.监听数据没有变化,外层不模拟更新
  useEffect(() => {
    console.log('挂载或更新')
    //const id = PubSub.subscribe()
    return () => {
      console.log('卸载')
      //   PubSub.unsubscribe(id)
    }
  }, [props.c])
  return <div>Test</div>
}
