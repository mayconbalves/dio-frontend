import {
  POST_PROTEST_ERROR,
  POST_PROTEST_SUCCESS,
  GET_PROTEST_ERROR,
  GET_PROTEST_SUCCESS,
  LIKE_ERROR,
  LIKE_SUCCESS,
  DISLIKE_ERROR,
  DISLIKE_SUCCESS
} from './constants'

const initialState = {
  error: null,
  loading: false,
  result: []
}

export default function protestReducer(state = initialState, action) {
  switch (action.type) {
  case GET_PROTEST_SUCCESS:
  case POST_PROTEST_SUCCESS:
  case LIKE_SUCCESS:
  case DISLIKE_SUCCESS:
    return {
      ...state,
      error: null,
      loading: true,
      result: action.payload.data.result
    }
  case GET_PROTEST_ERROR:
  case POST_PROTEST_ERROR:
  case LIKE_ERROR:
  case DISLIKE_ERROR:
    return {
      ...state,
      error: action.payload,
      loading: true,
      result: []
    }
  default:
    return state
  }
}
