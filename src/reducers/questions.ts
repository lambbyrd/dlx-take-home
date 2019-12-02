import { Action, LandingQuestionsCollection } from "../types";
import {
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
  GET_LANDING_FAILURE,
  GET_LANDING_SUCCESS
} from "../consts";

const questions = (state = {}, action: Action<LandingQuestionsCollection>) => {
  switch (action.type) {
    case GET_LANDING_SUCCESS:
      return {
        ...state,
        landingPage: action.data
      };
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        loginPage: action.data
      };

    case GET_LOGIN_FAILURE:
    case GET_LANDING_FAILURE:
      return state;
    default:
      return state;
  }
};

export default questions;
