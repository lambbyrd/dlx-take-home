import { GET_LANDING_FAILURE, GET_LANDING_SUCCESS } from "../consts";

export const getLandingQuestionsSuccess = (data: any) => ({
  type: GET_LANDING_SUCCESS,
  data
});

export const getLandingQuestionsFailure = (data: any) => ({
  type: GET_LANDING_FAILURE,
  data
});

export const getLandingQuestions = () => {};
