// 创建store对象
// configureStore 返回一个store对象
import { configureStore } from '@reduxjs/toolkit'
// 引入zs的slice
import zsSlice from './components/Count/redux/zsSlice'
const store = configureStore({
  reducer: {
    // 为了拿到reducer,我们需要创建slice
    zs: zsSlice.reducer,
  },
})

export default store

// console.log(store.getState())
// console.log(zsSlice.actions)
// zsSlice.actions里面存储了slice中自动帮我们创建的actionCreator
// const { add, sub } = zsSlice.actions
// // console.log(add()) //{type: 'xxx/add', payload: undefined}
// // console.log(sub(5)) //{type: 'xxx/sub', payload: 5}
// store.dispatch(add(1))
// store.dispatch(add(3))
// store.dispatch(sub(9))
