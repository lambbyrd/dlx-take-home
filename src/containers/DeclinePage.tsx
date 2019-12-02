import * as React from "react";

import { useGetData, useCallData } from "../helpers";
import { Wrapper } from "../components";
import { clearQuestionAnswer } from "../actions";

export const DeclinePage = () => {
  const [message] = useGetData("decision.message");

  useCallData(clearQuestionAnswer);

  return (
    <Wrapper>
      <div>{message}</div>
    </Wrapper>
  );
};

export default DeclinePage;
