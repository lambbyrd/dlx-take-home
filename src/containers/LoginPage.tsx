import * as React from "react";
import { get, map } from "lodash";

import { getLoginPages } from "../actions";
import { useCallData, useGetData, handleOnChange } from "../helpers";
import { Input, Wrapper } from "../components";

import * as Types from "../types";

const useHandleState = () => {
  const [questions, dispatch] = useGetData("questions.loginPage");
  const [answers] = useGetData("answers.loginPage");

  useCallData(getLoginPages);

  const saveAnswer = handleOnChange(dispatch, "loginPage");

  return [questions, saveAnswer, answers];
};

// These could be reused...
export const Login = () => {
  const [questions, saveAnswer, answers] = useHandleState();
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
                  value={get(answers, id)}
                />
              );
            }
          )}
      </>
    </Wrapper>
  );
};

export default Login;
