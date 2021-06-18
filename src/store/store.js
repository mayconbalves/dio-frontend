import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../CombineReducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk)(createStore)(reducers, devTools)

export default store
