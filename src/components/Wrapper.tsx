import * as React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  wrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "0px 20px 20px",
    width: "50%",
    minHeight: "40vh",
    backgroundColor: "white",
    borderRadius: "4px"
  }
});

interface IProps {
  children: React.ReactNode;
}

export const Wrapper = (props: IProps) => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.wrap}>{children}</div>;
};
