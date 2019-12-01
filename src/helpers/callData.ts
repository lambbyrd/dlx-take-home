import * as React from "react";
import { useDispatch } from "react-redux";

export const useCallData = (funcToRun: () => void) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(funcToRun());
  }, []);
};
