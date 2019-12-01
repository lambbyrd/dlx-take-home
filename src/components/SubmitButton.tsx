import * as React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  wrap: {
    backgroundColor: "#025082",
    color: "#fff",
    marginTop: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "10px",
    fontSize: "16px",
    outline: "none",
    "&.disabled": {
      cursor: "default",
      opacity: 0.5
    }
  }
});

interface IProps {
  label: string;
  disabled: boolean;
  onClick: () => void;
}

export const SubmitButton = (props: IProps) => {
  const classes = useStyles();
  const { label, onClick, disabled } = props;
  return (
    <button
      disabled={disabled}
      className={`${classes.wrap} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
