import { combineReducers } from "redux";
import decision from "./decisions";
import questions from "./questions";
import user from "./user";
import answers from "./answers";

const rootReducer = combineReducers({
  decision,
  questions,
  answers,
  user
});

export default rootReducer;
