import * as React from "react";
import { get, map, size } from "lodash";

import { getLoginPages } from "../actions";
import { useCallData, useGetData, handleOnChange } from "../helpers";
import { Input, Wrapper, SubmitButton } from "../components";

import * as Types from "../types";

const useHandleState = () => {
  const [questions, dispatch] = useGetData("questions.loginPage");
  const [answers] = useGetData("answers.loginPage");
  const [errors] = useGetData("errors.loginPage");
  useCallData(getLoginPages);

  const saveAnswer = handleOnChange(dispatch, "loginPage");
  return [questions, saveAnswer, answers, errors];
};

const isDisabled = <Q extends {}, A extends {}, E extends {}>(
  questions: Q,
  answers: A,
  errors: E
) => {
  let anError: number = 0;
  map(errors, error => {
    if (error) {
      anError++;
    }
  });
  if (anError > 0) {
    return true;
  }

  if (size(questions) !== size(answers)) {
    return true;
  }

  return false;
};

// These could be reused...
export const Login = () => {
  const [questions, saveAnswer, answers, errors] = useHandleState();
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
                  errors={get(errors, id)}
                />
              );
            }
          )}
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
            onClick={() => console.log("shit fired")}
          />
        </div>
      </>
    </Wrapper>
  );
};

export default Login;
