import { get } from "lodash";
import { Dispatch } from "redux";

import { saveQuestionAnswer } from "../actions";

export const handleOnChange = (dispatch: Dispatch, parent: string) => (
  e: React.SyntheticEvent
) => {
  const value = get(e, "target.value");
  const path = get(e, "target.id");

  dispatch(saveQuestionAnswer(`${parent}`, { [path]: value }));
};
