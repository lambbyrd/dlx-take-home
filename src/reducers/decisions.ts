import {
  POST_DECISION_SUCCESS,
  POST_DECISION_FAILURE,
  BAD_REQUEST,
  CLEAR_DECISION
} from "../consts";
import { Action } from "../types";

const decision = (state = {}, action: Action<any>) => {
  switch (action.type) {
    case POST_DECISION_SUCCESS:
      return {
        ...action.data
      };
    case POST_DECISION_FAILURE:
      return {
        ...action.data
      };
    case BAD_REQUEST:
      return {
        ...action.data
      };
    case CLEAR_DECISION:
      return {
        ...action.data
      };
    default:
      return state;
  }
};

export default decision;
