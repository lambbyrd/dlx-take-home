export type InputType = "TEXT" | "TEXT_AREA" | "NUMBER" | "SELECT" | "CURRENCY";

export interface IQuestion {
  id: string;
  label: string;
  type: InputType;
  required: boolean;
  options?: string[] | number[];
}

export type QuestionsCollection = Record<string, IQuestion>;

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
    loginPage: QuestionsCollection;
    landingPage: QuestionsCollection;
  };
}
