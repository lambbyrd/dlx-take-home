import { get } from "lodash";
import { Action } from "../types";

import { POST_LOGIN_FAILURE, POST_LOGIN_SUCCESS } from "../consts";

const user = (state = {}, action: Action) => {
  switch (action.type) {
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: get(action.data, "token")
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        token: get(action.data, "token")
      };
    default:
      return state;
  }
};

export default user;
