import * as React from "react";
import { Dispatch } from "redux";
import { get } from "lodash";

import { useSelector, useDispatch } from "react-redux";
import * as Types from "../types";

export const useGetData = (location: string): [any, Dispatch] => {
  const [data] = useSelector((state: Types.RootState) => [
    get(state, location)
  ]);
  return [data, useDispatch()];
};
