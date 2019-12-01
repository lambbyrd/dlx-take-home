import { Dispatch } from "redux";

import { GET_LANDING_FAILURE, GET_LANDING_SUCCESS } from "../consts";
import { getLandingQuestions } from "../api";

export const getLandingQuestionsSuccess = (data: any) => ({
  type: GET_LANDING_SUCCESS,
  data
});

export const getLandingQuestionsFailure = (data: any) => ({
  type: GET_LANDING_FAILURE,
  data
});

export const grabLandingQuestions = () => (dispatch: Dispatch) => {
  getLandingQuestions()
    .then(data => {
      dispatch(getLandingQuestionsSuccess(data));
    })
    .catch(err => {
      dispatch(getLandingQuestionsFailure(err));
    });
};
