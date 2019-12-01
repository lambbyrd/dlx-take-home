import { Middleware } from "redux";
import { map, get, isNil } from "lodash";

import { SAVE_QUESTION_ANSWER } from "./consts";
import { validationError } from "./actions";

export const testValidation = (type: string) => {
  switch (type) {
    case "CREDIT_SCORE":
      return {
        type: "CREDIT_SCORE",
        test: /^[3-7][0-9][0-9]$|^[8][0-4][0-9]$|^[8][5][0]$/g,
        message: "You need to have a number between 300-850"
      };
    case "CURRENCY":
      return {
        type: "CURRENCY",
        test: /\d{1,3}(,\d{3})*(\.\d+)/g,
        message: "This is not a valid currency. Example: 45,000.00"
      };
    case "EMAIL":
      return {
        type: "EMAIL",
        test: /^[^\s@]+@[^\s@]+\.[^\s@]+$/g,
        message: "This is not a valid email. Example: somename@somewhere.com"
      };
    case "PASSWORD":
      return {
        type: "PASSWORD",
        test: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&])(?=.{8,})/g,
        message:
          "Your password must contain number, special character and have a length over 8"
      };
    case "REQUIRED":
      return {
        type: "REQUIRED",
        message: "This field is required"
      };
    default:
      return;
  }
};

export const checkValidation: Middleware<
  unknown,
  {},
  any
> = store => next => action => {
  const currentState = store.getState();
  if (action.type === SAVE_QUESTION_ANSWER) {
    const { path, value: actionValue } = action.data;

    map(actionValue, (value, key) => {
      const currentQuestion = get(currentState, `questions.${path}.${key}`);
      if (!value && currentQuestion.required) {
        const reqiredValidation = testValidation("REQUIRED");
        if (reqiredValidation) {
          store.dispatch(
            validationError(path, { [key]: reqiredValidation.message })
          );
        }
      }
      if (value) {
        const questionValidation = testValidation(currentQuestion.type);
        if (questionValidation && questionValidation.test) {
          const reg = new RegExp(questionValidation.test);
          const match = value.match(reg);

          if (isNil(match)) {
            store.dispatch(
              validationError(path, { [key]: questionValidation.message })
            );
          } else {
            store.dispatch(validationError(path, { [key]: undefined }));
          }

          // This is a HACK. I would probably add a test array which would walk down
          // multiple validation cases.
          if (key === "confirmPassword") {
            const password = get(currentState, `answers.${path}.password`);
            if (password !== value) {
              store.dispatch(
                validationError(path, {
                  [key]: "Password and Confirm Password need to match"
                })
              );
            }
          }
        }
      }
    });
  }
  next(action);
};

export default checkValidation;
