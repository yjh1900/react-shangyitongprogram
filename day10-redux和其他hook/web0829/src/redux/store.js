import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reduer'

// 配置这个redux-thunk的作用: 可以在dispatch中写函数
// const store = createStore(reducer)
const store = createStore(
  reducer,
  //   { xxx: 111 }, 可以初始化数据,但是不用
  composeWithDevTools(applyMiddleware(thunk))
)

export default store

// 中间件
// express 中间件就是一个函数
// 浏览器发送请求  --> 中间件执行 -->对应的路由的回调执行 app.get(路径,回调)

// redux 中间件也是一个函数

// dispatch-- > 中间件-- > reducer
