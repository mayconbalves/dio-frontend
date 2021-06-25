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

import api from 'services/api'

const protestError = (error) => {
  return {
    type: POST_PROTEST_ERROR,
    payload: error
  }
}

const protestSuccess = (data) => {
  return {
    type: POST_PROTEST_SUCCESS,
    payload: data
  }
}

export const postProtest = (user, message) => (dispatch) => {

  api.post('protest', { user, message })
    .then((response) => dispatch(protestSuccess(response)))
    .catch((error) => dispatch(protestError(error)))
}

const getProtestError = (error) => {
  return {
    type: GET_PROTEST_ERROR,
    payload: error
  }
}

const getProtestSuccess = (data) => {
  return {
    type: GET_PROTEST_SUCCESS,
    payload: data
  }
}

export const fetchProtest = () => (dispatch) => {
  api.get('protest')
    .then((response) => dispatch(getProtestSuccess(response)))
    .catch((error) => dispatch(getProtestError(error)))
}

const likeError = (error) => {
  return {
    type: LIKE_ERROR,
    payload: error
  }
}

const likeSuccess = (data) => {
  return {
    type: LIKE_SUCCESS,
    payload: data
  }
}

export const likeAction = (id) => (dispatch) => {
  api.put(`/protest/like/${id}`)
    .then((response) => dispatch(likeSuccess(response)))
    .catch((error) => dispatch(likeError(error)))
}

const dislikeError = (error) => {
  return {
    type: DISLIKE_ERROR,
    payload: error
  }
}

const dislikeSuccess = (data) => {
  return {
    type: DISLIKE_SUCCESS,
    payload: data
  }
}

export const dislikeAction = (id) => (dispatch) => {
  api.put(`/protest/dislike/${id}`)
    .then((response) => dispatch(dislikeSuccess(response)))
    .catch((error) => dispatch(dislikeError(error)))
}
