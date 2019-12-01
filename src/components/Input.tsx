import * as React from "react";
import { get } from "lodash";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AttachMoney from "@material-ui/icons/AttachMoney";

import { IQuestion } from "../types";

const handleOnChange = (
  type: string,
  onChange: (e: React.SyntheticEvent) => void
) => (e: React.SyntheticEvent) => {
  if (type === "CURRENCY") {
    const reg = new RegExp(/^\d+(\.)|\d+(\,)|\d+(\.\d{2})?$/g);
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
  errors?: string;
}
export const Input = (props: IProps) => {
  const [checkErrors, setCheckErrors] = React.useState(false);
  const { type, label, id, required, onChange, value, errors } = props;
  return (
    <TextField
      id={id}
      required={required}
      label={label}
      type={type}
      onChange={handleOnChange(type, onChange)}
      value={value}
      onFocus={() => setCheckErrors(false)}
      onBlur={() => setCheckErrors(true)}
      error={checkErrors && Boolean(errors)}
      helperText={checkErrors && errors ? errors : ""}
      InputProps={{
        startAdornment:
          type === "CURRENCY" && value ? (
            <InputAdornment position="start">
              <AttachMoney style={{ width: "20px", height: "20px" }} />
            </InputAdornment>
          ) : null
      }}
    />
  );
};
