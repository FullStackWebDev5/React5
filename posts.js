const redux = require('redux')
const { createStore } = redux

/**************************************** */
const ADD_POST = 'ADD_POST'

const addPost = () => {
  return { type: ADD_POST }
}

/**************************************** */
const initialState = {
  posts: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST: 
      return {
        ...state,
        posts: [...state.posts, 'New Post']
      }

    default: return state
  }
}

/**************************************** */

// Store
const store = createStore(reducer)
const unsubscribe = store.subscribe(() => console.log('Subscribe'))
console.log(store.getState())
store.dispatch(addPost())
console.log(store.getState())
store.dispatch(addPost())
console.log(store.getState())
unsubscribe()




















// Reducer
// 1. Initial State
// 2. Actions and corresponding updates 
