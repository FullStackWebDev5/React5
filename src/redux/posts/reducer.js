import {
  FETCH_POSTS_REQUESTED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./action";

const initialState = {
  loading: false,
  posts: [],
  error: ''
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      }
    
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    
    default: return state
  }
}

export default postsReducer