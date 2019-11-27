import * as React from "react";
import TextField from "@material-ui/core/TextField";
import AutoComplete from "@material-ui/lab/Autocomplete";

interface IProps<T> {
  label: string;
  onChange: (value: T) => void;
  converter: (option: T) => string;
  options: T[];
}

export const Select = <T,>(props: IProps<T>) => {
  const { options, converter, label } = props;
  return (
    <AutoComplete
      options={options}
      getOptionLabel={converter}
      renderInput={params => (
        <TextField label={label} variant="outlined" fullWidth />
      )}
    />
  );
};
