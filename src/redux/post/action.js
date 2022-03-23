import axios from 'axios'

export const FETCH_POST_REQUESTED = 'FETCH_POST_REQUESTED'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'

export const fetchPostRequested = () => {
  return {
    type: FETCH_POST_REQUESTED
  }
}

export const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts
  }
}

export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  }
}

export const fetchPost = (id) => {
  return async (dispatch) => {
    try{
      dispatch(fetchPostRequested())
      let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      dispatch(fetchPostSuccess(res.data))
    } catch (error) {
      dispatch(fetchPostFailure(error.message))
    }
  }
}

