export const FETCH_POSTS_REQUESTED = 'FETCH_POSTS_REQUESTED'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export const fetchPostsRequested = () => {
  return {
    type: FETCH_POSTS_REQUESTED
  }
}

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequested())
  }
}

