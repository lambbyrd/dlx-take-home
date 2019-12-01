import * as React from "react";
import { Dispatch } from "redux";
import { get, map } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import { getLoginPages, saveQuestionAnswer } from "../actions";
import { Input, Wrapper } from "../components";

import * as Types from "../types";

const handleOnChange = (dispatch: Dispatch, parent: string) => (
  e: React.SyntheticEvent
) => {
  const value = get(e, "target.value");
  const path = get(e, "target.id");

  dispatch(saveQuestionAnswer(`${parent}.${path}`, value));
};

const useHandleStore = () => {
  const dispatch = useDispatch();

  const [questions] = useSelector((state: Types.RootState) => [
    get(state, "questions.loginPage")
  ]);

  return [dispatch, questions];
};

const useHandleState = () => {
  const [dispatch, questions] = useHandleStore();

  React.useEffect(() => {
    dispatch(getLoginPages());
  }, []);

  const saveAnswer = handleOnChange(dispatch, "loginPage");

  return [questions, saveAnswer];
};

export const Login = () => {
  const [questions, saveAnswer] = useHandleState();

  return (
    <Wrapper>
      <>
        <p>Sign Up</p>
        {questions &&
          map(
            questions as Types.RootState["questions"]["loginPage"],
            question => {
              const { id, type, label, required } = question;
              return (
                <Input
                  id={id}
                  required={required}
                  type={type}
                  label={label}
                  onChange={saveAnswer}
                />
              );
            }
          )}
      </>
    </Wrapper>
  );
};

export default Login;
