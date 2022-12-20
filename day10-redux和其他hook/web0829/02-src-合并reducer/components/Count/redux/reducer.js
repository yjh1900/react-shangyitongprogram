import { ADD } from './constants'
const initState = { count: 0 }
export default function zsReducer(state = initState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + action.payload,
      }
    default:
      return state
  }
}
