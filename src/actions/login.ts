import {
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
  POST_LOGIN_FAILURE,
  POST_LOGIN_SUCCESS
} from "../consts";

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

export const getLoginPages = () => {};

export const postLogin = () => {};
