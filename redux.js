const redux = require('redux')
const { createStore } = redux

/**************************************** */

// Action Type Constant
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

// Action
// {
//   type: INCREMENT_COUNTER
// }

// {
//   type: DECREMENT_COUNTER
// }

// Action Creator
const incrementCount = () => {
  return { type: INCREMENT_COUNTER }
}

const decrementCounter = () => {
  return { type: DECREMENT_COUNTER }
}


/**************************************** */

// Initial State
const initialState = {
  count: 0,
}

// Reducer function
// - Contains initial state
// - Contains two parameters: prevState and action
// - On the basis of action, it will return the updated state (logic)
const reducer = (state = initialState, action) => {
  switch(action.type){
    case INCREMENT_COUNTER: 
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT_COUNTER: 
      return {
        ...state,
        count: state.count - 1
      }

    default: return state
  }
}

/**************************************** */

// Store
const store = createStore(reducer)

// getState() -> returns the current state

console.log(store.getState())

const unsubscribe = store.subscribe(() => {})

store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(decrementCounter())
store.dispatch(incrementCount())
store.dispatch(incrementCount())

console.log(store.getState())

unsubscribe()




















// Reducer
// 1. Initial State
// 2. Actions and corresponding updates 
