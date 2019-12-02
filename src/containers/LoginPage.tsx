import * as React from "react";
import { get, map } from "lodash";
import { useHistory } from "react-router-dom";

import { getLoginPages, postLogin } from "../actions";
import {
  useCallData,
  useGetData,
  handleOnChange,
  isDisabled
} from "../helpers";
import { Input, Wrapper, SubmitButton } from "../components";

import { LoginQuestionsCollection, LoginAnswers, LoginErrors } from "../types";

const useHandleState = () => {
  const [questions, dispatch] = useGetData("questions.loginPage");
  const [answers] = useGetData("answers.loginPage") as LoginAnswers[];
  const [errors] = useGetData("errors.loginPage") as LoginErrors[];
  useCallData(getLoginPages);

  const saveAnswer = handleOnChange(dispatch, "loginPage");
  return [questions, saveAnswer, answers, errors, dispatch];
};

// These could be reused...
export const Login = () => {
  const [questions, saveAnswer, answers, errors, dispatch] = useHandleState();

  const history = useHistory();
  return (
    <Wrapper>
      <>
        <p>Sign Up</p>
        {questions &&
          map(questions as LoginQuestionsCollection, question => {
            const { id, type, label, required } = question;
            return (
              <Input
                id={id}
                required={required}
                type={type}
                label={label}
                onChange={saveAnswer}
                value={get(answers, id)}
                errors={get(errors, id)}
              />
            );
          })}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <SubmitButton
            disabled={isDisabled(questions, answers, errors)}
            label="Submit"
            onClick={() =>
              dispatch(
                postLogin(history.push, {
                  username: get(answers, "username", ""),
                  password: get(answers, "password", "")
                })
              )
            }
          />
        </div>
      </>
    </Wrapper>
  );
};

export default Login;
