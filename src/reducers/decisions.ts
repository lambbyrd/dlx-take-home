import { POST_DECISION_SUCCESS, POST_DECISION_FAILURE } from "../consts";
import { Action } from "../types";

const decision = (state = {}, action: Action) => {
  switch (action.type) {
    case POST_DECISION_SUCCESS:
      return {
        applicationApproved: true,
        message: action.data
      };
    case POST_DECISION_FAILURE:
      return {
        applicationApproved: false,
        message: action.data
      };
    default:
      return state;
  }
};

export default decision;
