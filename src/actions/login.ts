import {
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
  POST_LOGIN_FAILURE,
  POST_LOGIN_SUCCESS,
  SAVE_QUESTION_ANSWER
} from "../consts";

import { getLoginQuestions, postUser, getToken } from "../api";
import { Dispatch } from "redux";

export const getLoginSuccess = (data: any) => ({
  type: GET_LOGIN_SUCCESS,
  data
});

export const getLoginFailure = (data: any) => ({
  type: GET_LOGIN_FAILURE,
  data
});

export const postLoginSuccess = (data: any) => ({
  type: POST_LOGIN_SUCCESS,
  data
});

export const postLoginFailure = (data: any) => ({
  type: POST_LOGIN_FAILURE,
  data
});

export const saveQuestionAnswer = (path: string, value: Object) => ({
  type: SAVE_QUESTION_ANSWER,
  data: {
    path,
    value
  }
});

export const getLoginPages = () => (dispatch: Dispatch) => {
  getLoginQuestions()
    .then(data => {
      dispatch(getLoginSuccess(data));
    })
    .catch(err => dispatch(getLoginFailure(err)));
};

export const postLogin = (
  push: (path: string, state?: any) => void,
  data: { username: string; password: string }
) => (dispatch: Dispatch) => {
  postUser(data)
    .then(recievedData => {
      // Really no need for this but put it here to kinda replicate getting a token.
      if (data.username === recievedData.username) {
        getToken()
          .then(auth => {
            dispatch(postLoginSuccess(auth));
            push("/decision");
          })
          .catch(error => dispatch(postLoginFailure(error)));
      } else {
        dispatch(postLoginFailure("Could not log you in."));
      }
    })
    .catch(err => dispatch(postLoginFailure(err)));
};
