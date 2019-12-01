import { VALIDATION_ERROR } from "../consts";

export const validationError = (path: string, value: Object) => ({
  type: VALIDATION_ERROR,
  data: {
    path,
    value
  }
});
