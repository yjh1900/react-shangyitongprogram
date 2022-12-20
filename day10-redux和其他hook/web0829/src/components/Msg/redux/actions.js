import { SET_MSG } from './constants'

export function setMsg(payload) {
  return { type: SET_MSG, payload }
}
