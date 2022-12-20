// 这里创建redux中的slice对象

import { createSlice } from '@reduxjs/toolkit'

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
})

export default zsSlice
