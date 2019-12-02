import { Dispatch } from "redux";
import { get } from "lodash";

import { useSelector, useDispatch } from "react-redux";
import * as Types from "../types";

// This should be updated to handle an array of strings. Also more generic
// so you could gain the type inference
export const useGetData = (location: string): [any, Dispatch] => {
  const [data] = useSelector((state: Types.RootState) => [
    get(state, location)
  ]);
  return [data, useDispatch()];
};
