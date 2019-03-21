import { combineReducers } from 'redux'
import { reducer as fooReducer } from './foo'

export default combineReducers({
  foo: fooReducer,
})
