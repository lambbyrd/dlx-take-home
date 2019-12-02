import { map, size } from "lodash";

// In real life this would need to be much more robust and probably no need for
// generics here but could come in useful depening on what is needed
export const isDisabled = <Q extends {}, A extends {}, E extends {}>(
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
