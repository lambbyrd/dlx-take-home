import * as React from "react";
import TextField from "@material-ui/core/TextField";

import { IQuestion } from "../types";

interface IProps extends IQuestion {
  onChange: (e: React.SyntheticEvent) => void;
}
export const Input = (props: IProps) => {
  const { type, label, id, required, onChange } = props;
  return (
    <TextField
      id={id}
      required={required}
      label={label}
      type={type}
      onChange={onChange}
    />
  );
};
