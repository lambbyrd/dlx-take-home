import { get } from "lodash";
import { VALIDATION_ERROR } from "../consts";
import { Action, IValidationError } from "../types";

const errors = (state = {}, action: Action<IValidationError>) => {
  switch (action.type) {
    case VALIDATION_ERROR:
      return {
        ...state,
        [action.data.path]: {
          ...get(state, action.data.path),
          ...action.data.value
        }
      };
    default:
      return {
        ...state
      };
  }
};

export default errors;
