import * as React from "react";
import { map, get } from "lodash";

import { grabLandingQuestions, saveQuestionAnswer } from "../actions";
import { useCallData, useGetData, handleOnChange } from "../helpers";
import { Input, Wrapper } from "../components";

import * as Types from "../types";

const useHandleState = () => {
  const [questions, dispatch] = useGetData("questions.landingPage");
  const [answers] = useGetData("answers.landingPage");
  useCallData(grabLandingQuestions);

  const saveAnswer = handleOnChange(dispatch, "landingPage");
  return [questions, saveAnswer, answers];
};

// These could be reused...
export const StartLoan = () => {
  const [questions, saveAnswer, answers] = useHandleState();

  return (
    <Wrapper>
      <>
        <p>Apply For Auto Loan</p>
        {questions &&
          map(
            questions as Types.RootState["questions"]["landingPage"],
            question => {
              const { id, type, label, required } = question;
              return (
                <Input
                  id={id}
                  required={required}
                  type={type}
                  label={label}
                  onChange={saveAnswer}
                  value={get(answers, id) || ""}
                />
              );
            }
          )}
      </>
    </Wrapper>
  );
};

export default StartLoan;
