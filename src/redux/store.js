import { createStore, combineReducers, applyMiddleware } from 'redux'
import counterReducer from './count/reducer'
import postsReducer from './posts/reducer'
import reduxThunk from 'redux-thunk';
const thunkMiddleware = reduxThunk.default

const rootReducer = combineReducers({
  count: counterReducer,
  posts: postsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store