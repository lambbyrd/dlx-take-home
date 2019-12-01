import * as React from "react";
import { get } from "lodash";
import TextField from "@material-ui/core/TextField";

import { IQuestion } from "../types";

const handleOnChange = (
  type: string,
  onChange: (e: React.SyntheticEvent) => void
) => (e: React.SyntheticEvent) => {
  if (type === "CURRENCY") {
    const reg = new RegExp(/\d/g);
    const value = get(e, "target.value");
    const match = value.match(reg);
    if (match || !value) {
      onChange(e);
    }
  } else {
    onChange(e);
  }
};
interface IProps extends IQuestion {
  value: string | number;
  onChange: (e: React.SyntheticEvent) => void;
}
export const Input = (props: IProps) => {
  const { type, label, id, required, onChange, value } = props;
  return (
    <TextField
      id={id}
      required={required}
      label={label}
      type={type}
      onChange={handleOnChange(type, onChange)}
      value={value}
    />
  );
};
