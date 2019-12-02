import { Dispatch } from "redux";

import {
  POST_DECISION_SUCCESS,
  POST_DECISION_FAILURE,
  BAD_REQUEST
} from "../consts";

import { checkApplication } from "../fakeBackend";
import { getBadRequest, getDecision } from "../api";

export const applicationSuccess = (value: Object) => ({
  type: POST_DECISION_SUCCESS,
  data: value
});

export const applicationFailure = () => ({
  type: POST_DECISION_FAILURE,
  data: {
    approved: undefined,
    message: "There was an error approving you loan. Check back later."
  }
});

export const badRequest = () => ({
  type: BAD_REQUEST,
  data: {
    approved: undefined,
    message: "BAD_REQUEST: Something went wrong with your application."
  }
});

export const sendApplication = (
  push: (path: string, state?: any) => void,
  answers: {
    [key: string]: string | number;
  }
) => (dispatch: Dispatch) => {
  const decision = checkApplication(answers);
  if (decision.decision === BAD_REQUEST) {
    //  This a fabricated bad request. A work around for not building out a more robust server
    getBadRequest()
      .then(data => {
        // This should never fire
        console.log("success", data);
      })
      .catch(err => dispatch(badRequest()));
  } else {
    const { apiPath, navPath } = decision;
    getDecision(apiPath)
      .then(data => {
        dispatch(applicationSuccess(data));
        push(navPath);
      })
      .catch(err => {
        dispatch(applicationFailure());
      });
  }
};
