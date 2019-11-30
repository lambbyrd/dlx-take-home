import { combineReducers } from "redux";
import decision from "./decisions";
import questions from "./questions";
import user from "./user";

const rootReducer = combineReducers({
  decision,
  questions,
  user
});

export default rootReducer;
