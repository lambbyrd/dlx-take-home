import * as React from "react";

import { useGetData } from "../helpers";
import { Wrapper } from "../components";

export const DeclinePage = () => {
  const [message] = useGetData("decision.message");
  return (
    <Wrapper>
      <div>{message}</div>
    </Wrapper>
  );
};

export default DeclinePage;
