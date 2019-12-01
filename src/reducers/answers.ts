import { get } from "lodash";
import { SAVE_QUESTION_ANSWER } from "../consts";
import { Action, ISaveAnswer } from "../types";

const answers = (state = {}, action: Action<ISaveAnswer>) => {
  switch (action.type) {
    case SAVE_QUESTION_ANSWER:
      console.log(get(state, action.data.path));
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

export default answers;
