const initState = { count: 0, msg: 'hello' }
export default function reducer(state = initState, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'setMsg':
      return {
        ...state,
        msg: 'redux',
      }

    default:
      return state
  }
}
