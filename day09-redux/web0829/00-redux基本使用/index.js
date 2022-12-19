import { createStore } from 'redux'
const initState = { count: 0, msg: 'hello' }
// 给state设置默认值,就可以给store初始化数据
// reducer函数的执行时机:
// 1. createStore的时候 为了初始化数据
// 2. 执行了store.dispatch  为了修改数据
function reducer(state = initState, action) {
  //   console.log('执行了', state, action)
  // state是store里面管理的数据 默认是undefined
  // action就是修改数据的需求对象 {type: 'add'}
  switch (action.type) {
    case 'add':
      // 计算
      const newCount = state.count + 1
      // reducer函数return的结果是什么,则store中的数据就变成了什么
      return {
        // 保留其他数据
        ...state,
        count: newCount,
      }

    case 'sub':
      return {
        ...state,
        count: state.count - 1,
      }

    // 任何衣蛾reducer都必须写这个default
    // 为了初始化store的数据
    default:
      return state
  }
}
const store = createStore(reducer)

// 查看store的数据
// console.log(store.getState())

// 修改数据
// dispatch调用会触发reducer函数执行. reducer函数执行完毕,则store里面的数据就被修改完毕了
store.dispatch({ type: 'add' })
// store.dispatch({ type: 'add' })
// store.dispatch({ type: 'add' })
// store.dispatch({ type: 'add' })
console.log(store.getState())
