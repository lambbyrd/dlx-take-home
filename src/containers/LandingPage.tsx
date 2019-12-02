import * as React from "react";
import { map, get } from "lodash";
import { useHistory } from "react-router-dom";

import {
  grabLandingQuestions,
  sendApplication,
  clearDecision
} from "../actions";
import {
  useCallData,
  useGetData,
  handleOnChange,
  isDisabled
} from "../helpers";
import { Input, Wrapper, SubmitButton } from "../components";
import {
  LandingQuestionsCollection,
  LandingAnswers,
  LandingErrors
} from "../types";

const useHandleState = () => {
  const [questions, dispatch] = useGetData("questions.landingPage");
  const [answers] = useGetData("answers.landingPage") as LandingAnswers[];
  const [errors] = useGetData("errors.landingPage") as LandingErrors[];
  const [decision] = useGetData("decision");

  useCallData(grabLandingQuestions);
  useCallData(clearDecision);

  const saveAnswer = handleOnChange(dispatch, "landingPage");
  return [questions, saveAnswer, answers, errors, dispatch, decision];
};

// These could be reused...
export const StartLoan = () => {
  const [
    questions,
    saveAnswer,
    answers,
    errors,
    dispatch,
    decision
  ] = useHandleState();

  const history = useHistory();
  return (
    <Wrapper>
      <>
        <p>Apply For Auto Loan</p>
        {questions &&
          map(questions as LandingQuestionsCollection, question => {
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
          })}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          {decision && decision.message && <div>{decision.message}</div>}
          <SubmitButton
            disabled={isDisabled(questions, answers, errors)}
            label="Submit"
            onClick={() => dispatch(sendApplication(history.push, answers))}
          />
        </div>
      </>
    </Wrapper>
  );
};

export default StartLoan;
