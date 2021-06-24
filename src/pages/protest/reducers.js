import {
  POST_PROTEST_ERROR,
  POST_PROTEST_SUCCESS,
  GET_PROTEST_ERROR,
  GET_PROTEST_SUCCESS
} from './constants'

const initialState = {
  error: null,
  loading: false,
  protests: []
}

export default function protestReducer(state = initialState, action) {
  switch (action.type) {
  case GET_PROTEST_SUCCESS:
  case POST_PROTEST_SUCCESS:
    return {
      ...state,
      error: null,
      loading: true,
      protests: action.payload.data
    }
  case GET_PROTEST_ERROR:
  case POST_PROTEST_ERROR:
    return {
      ...state,
      error: action.payload,
      loading: true,
      protests: []
    }
  default:
    return state
  }
}
