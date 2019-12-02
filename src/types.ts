export type InputType = "TEXT" | "TEXT_AREA" | "NUMBER" | "SELECT" | "CURRENCY";

export type LandingQuestions =
  | "question1"
  | "question2"
  | "question3"
  | "question4"
  | "question5";

export type LoginQuestions = "username" | "password" | "confirmPassword";

export interface IQuestion {
  id: string;
  label: string;
  type: InputType;
  required: boolean;
  options?: string[] | number[];
}

// This is a mapped type
export type AnswerOrError<T> = {
  [P in keyof T]?: string | number;
};

export type LandingQuestionsCollection = Record<LandingQuestions, IQuestion>;
export type LoginQuestionsCollection = Record<LoginQuestions, IQuestion>;

export type LandingAnswers = AnswerOrError<LandingQuestionsCollection>;
export type LandingErrors = AnswerOrError<LandingQuestionsCollection>;

export type LoginAnswers = AnswerOrError<LoginQuestionsCollection>;
export type LoginErrors = AnswerOrError<LoginQuestionsCollection>;

export interface IAnswer {
  id: string;
  questionId: string;
  value: string | number;
}

export interface IValidation {
  id: string;
  questionId: string;
  format: RegExp | string;
  message: string;
}

export interface Action<T> {
  type: string;
  data: T;
}

export interface ISaveAnswer {
  path: string;
  value: {
    [key: string]: string | number;
  };
}
export interface IValidationError {
  path: string;
  value: {
    [key: string]: string;
  };
}

export interface RootState {
  user: {
    isAuthenicated: boolean;
  };
  questions: {
    loginPage: LoginQuestionsCollection;
    landingPage: LandingQuestionsCollection;
  };
  errors: {
    loginPage?: LoginErrors;
    landingPage?: LandingErrors;
  };
  answers: {
    loginPage?: LoginAnswers;
    landingPage?: LandingAnswers;
  };
}
