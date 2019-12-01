import {
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
  POST_LOGIN_FAILURE,
  POST_LOGIN_SUCCESS,
  SAVE_QUESTION_ANSWER
} from "../consts";

import { getLoginQuestions } from "../api";
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

export const postLogin = () => {};
