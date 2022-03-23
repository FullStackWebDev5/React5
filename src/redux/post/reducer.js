import {
  FETCH_POST_REQUESTED,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from "./action";

const initialState = {
  loading: false,
  post: {},
  error: ''
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload
      }
    
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    
    default: return state
  }
}

export default postReducer