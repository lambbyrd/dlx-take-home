export type InputType = "TEXT" | "TEXT_AREA" | "NUMBER" | "SELECT";

export interface IQuestion {
  id: string;
  label: string;
  type: InputType;
  required: boolean;
  options?: string[] | number[];
}

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
