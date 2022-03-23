import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import counterReducer from './count/reducer'
import postsReducer from './posts/reducer'
import postReducer from './post/reducer'
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  count: counterReducer,
  posts: postsReducer,
  post: postReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk, createLogger())))

export default store