import { ADD, SET_MSG } from './constants'
const initState = { count: 0, msg: 'hello' }
export default function reducer(state = initState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + action.payload,
      }
    case SET_MSG:
      return {
        ...state,
        msg: action.payload,
      }

    default:
      return state
  }
}
