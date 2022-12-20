import { ADD } from './constants'
export function add(payload) {
  return { type: ADD, payload }
}

export function asyncAdd() {
  return (dispatch) => {
    // 执行异步操作
    setTimeout(() => {
      dispatch(add(2))
    }, 2000)
  }
}
