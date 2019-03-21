export function reducer(state = [], action) {
  return [...state, action.type]
}

export default {
  reducer,
}
