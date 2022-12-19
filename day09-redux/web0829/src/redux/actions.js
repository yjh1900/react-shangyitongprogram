// 用于创建返回action对象的函数

// 人们把这些返回action对象的函数,统称为actionCreator
import { ADD, SET_MSG } from './constants'
export function add(payload) {
  return { type: ADD, payload }
}
export function setMsg(payload) {
  return { type: SET_MSG, payload }
}
