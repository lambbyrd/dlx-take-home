import * as React from "react";
import { map, get, size, reduce } from "lodash";

import { grabLandingQuestions } from "../actions";
import { useCallData, useGetData, handleOnChange } from "../helpers";
import { Input, Wrapper, SubmitButton } from "../components";

import * as Types from "../types";

const useHandleState = () => {
  const [questions, dispatch] = useGetData("questions.landingPage");
  const [answers] = useGetData("answers.landingPage");
  const [errors] = useGetData("errors.landingPage");
  useCallData(grabLandingQuestions);

  const saveAnswer = handleOnChange(dispatch, "landingPage");
  return [questions, saveAnswer, answers, errors];
};

// In real life this would need to be much more robust and probably no need for
// generics here but could come in useful depening on what is needed
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
export const StartLoan = () => {
  const [questions, saveAnswer, answers, errors] = useHandleState();

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

export default StartLoan;
