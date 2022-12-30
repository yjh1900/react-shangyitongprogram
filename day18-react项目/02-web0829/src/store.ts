// 创建store对象
// configureStore 返回一个store对象
import { configureStore } from '@reduxjs/toolkit'
// 引入zs的slice
import zsSlice from './slice'

const store = configureStore({
  reducer: {
    zs: zsSlice.reducer,
  },
})

export default store
export const { setLang } = zsSlice.actions
export type AppDispatch = typeof store.dispatch
// typeof store.getState 只在ts编译成js的时候执行
export type RootState = ReturnType<typeof store.getState>
