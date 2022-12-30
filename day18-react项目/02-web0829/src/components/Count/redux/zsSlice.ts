// 这里创建redux中的slice对象

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 这个asyncCount既是一个可以监听异步执行的对象.同时也是一个异步的actionCreator
export const asyncCount = createAsyncThunk('async', () => {
  //注意: 这个回调中要求必须返回一个promise实例
  return new Promise<number>((resolve, reject) => {
    // 这里执行异步操作
    setTimeout(() => {
      resolve(4)
      //   reject()
    }, 2000)
  })
})

const zsSlice = createSlice({
  name: 'xxx', //当前slice的名称. 决定了reducer中case的名称. 决定了名称的前半部分
  initialState: { count: 0 }, // 初始数据
  reducers: {
    // reducers里面写的这些函数,就相当于是之前reducer里面写的case. 并且同时,还会根据这个函数,帮我们创建出来同名的actionCreator
    add(state, action) {
      // state不是真正的redux中zs需要的数据.其实是redux中zs需要的数据的代理
      // 如果要修改数据,可以直接给state赋值,可以直接修改

      // action还是需求对象
      console.log(state, action)
      state.count = state.count + action.payload
    },
    sub(state, action) {
      state.count = state.count - action.payload
    },
  },
  extraReducers(builder) {
    // builder.addCase(asyncCount.pending, (state, action) => {
    //   // 当异步开始执行的时候,调用
    //   console.log('异步开始了')
    // })
    builder.addCase(asyncCount.fulfilled, (state, action) => {
      // 当异步成功的时候,调用
      console.log('异步成功了')
      console.log(action)
      state.count = state.count + action.payload
    })
    // builder.addCase(asyncCount.rejected, (state, action) => {
    //   // 当异步失败的时候,调用
    //   console.log('异步失败了')
    // })
  },
})

export default zsSlice
