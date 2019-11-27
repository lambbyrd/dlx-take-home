type InputType = "TEXT" | "TEXT_AREA" | "NUMBER" | "SELECT";

interface IQuestion {
  id: string;
  label: string;
  type: InputType;
  required: boolean;
  options?: string[] | number[];
}

interface IAnswer {
  id: string;
  questionId: string;
  value: string | number;
}

interface IValidation {
  id: string;
  questionId: string;
  format: RegExp | string;
  message: string;
}
