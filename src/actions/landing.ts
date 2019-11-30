import { GET_QUESTIONS_FAILURE, GET_QUESTIONS_SUCCESS } from "../consts";

export const getQuestionSuccess = (data: any) => ({
  type: GET_QUESTIONS_SUCCESS,
  data
});

export const getQuestionFailure = (data: any) => ({
  type: GET_QUESTIONS_FAILURE,
  data
});

export const getQuestions = () => {};
