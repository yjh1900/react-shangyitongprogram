import { SET_MSG } from './constants'
const initState = { msg: 'hello' }
export default function lsReducer(state = initState, action) {
  switch (action.type) {
    case SET_MSG:
      return {
        ...state,
        msg: action.payload,
      }

    default:
      return state
  }
}
