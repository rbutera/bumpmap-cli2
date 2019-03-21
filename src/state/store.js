import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '@/state/root-reducer'
import { createLogger } from 'redux-logger'

/* eslint-disable */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose
/* eslint-enable */

const logger = createLogger({
  collapsed: true,
})

const middleware = [logger]

const enhancer = composeEnhancers(applyMiddleware(...middleware))

export const store = createStore(reducer, enhancer)

export const { dispatch } = store

export default store
