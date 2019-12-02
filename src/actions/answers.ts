import { SAVE_QUESTION_ANSWER, CLEAR_QUESTION_ANSWER } from "../consts";

export const saveQuestionAnswer = (path: string, value: Object) => ({
  type: SAVE_QUESTION_ANSWER,
  data: {
    path,
    value
  }
});

export const clearQuestionAnswer = () => ({
  type: CLEAR_QUESTION_ANSWER,
  data: {
    path: "landingPage",
    value: {}
  }
});
