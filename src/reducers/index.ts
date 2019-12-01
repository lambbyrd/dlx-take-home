import { combineReducers } from "redux";
import decision from "./decisions";
import questions from "./questions";
import user from "./user";
import answers from "./answers";
import errors from "./errors";

const rootReducer = combineReducers({
  decision,
  questions,
  answers,
  errors,
  user
});

export default rootReducer;
