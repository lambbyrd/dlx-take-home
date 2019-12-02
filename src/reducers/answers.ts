import { get } from "lodash";
import { SAVE_QUESTION_ANSWER, CLEAR_QUESTION_ANSWER } from "../consts";
import { Action, ISaveAnswer } from "../types";

const answers = (state = {}, action: Action<ISaveAnswer>) => {
  switch (action.type) {
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.data.path]: {
          ...get(state, action.data.path),
          ...action.data.value
        }
      };
    case CLEAR_QUESTION_ANSWER:
      return {
        ...state,
        [action.data.path]: action.data.value
      };
    default:
      return {
        ...state
      };
  }
};

export default answers;
