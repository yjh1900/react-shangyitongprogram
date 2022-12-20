import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import lsReducer from './components/Msg/redux/reduer'
import zsReducer from './components/Count/redux/reducer'

// 注意： 为了协作开发,会将每一个程序员所操作的组件相关的redux代码分开写.那就会导致出现多个reducer函数.但是创建store的时候,只能传入一个reducer函数.所以我们需要合并reducer.合并reducer其实就是将多个reducer函数合并成一个

const rootReducer = combineReducers({
  zs: zsReducer,
  ls: lsReducer,
})
// 注意: 合并reducer之后,redux中store存储数据的结构会发生变化,我们只需要在useSelector过滤数据的时候,根据数据调整代码.其他其他都不用动.尤其是reducer不需要修改.因为reducer中拿到的state数据,就是张三或李四自己的那一份

const store = createStore(
  rootReducer,
  //   { xxx: 111 }, 可以初始化数据,但是不用
  composeWithDevTools(applyMiddleware(thunk))
)

export default store

// 中间件
// express 中间件就是一个函数
// 浏览器发送请求  --> 中间件执行 -->对应的路由的回调执行 app.get(路径,回调)

// redux 中间件也是一个函数

// dispatch-- > 中间件-- > reducer
