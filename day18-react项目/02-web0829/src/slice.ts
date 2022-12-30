// 这里创建redux中的slice对象

import { createSlice } from '@reduxjs/toolkit'

const zsSlice = createSlice({
  name: 'xxx', //当前slice的名称. 决定了reducer中case的名称. 决定了名称的前半部分
  initialState: { lang: 'en' }, // 初始数据
  reducers: {
    setLang(state, action) {
      state.lang = action.payload
    },
  },
})

export default zsSlice
