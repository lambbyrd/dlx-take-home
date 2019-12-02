import { IAnswer } from "./types";
import { string } from "prop-types";

interface IApplicationResponse {
  navPath: string;
  apiPath: string;
  decision: string;
}

const toNumber = (str: string) => Number(str.replace(",", ""));

export const checkApplication = (answers: {
  [key: string]: string | number;
}): IApplicationResponse => {
  const { question1, question4, question5 } = answers;

  const question1Number =
    typeof question1 === "string" ? toNumber(question1) : question1;
  const question4Number =
    typeof question4 === "string" ? toNumber(question4) : question4;

  const aFifth = question4Number * 0.2;

  const isApproved = question1Number <= aFifth && question5 > 600;

  const badRequest = question1Number > 1000000;

  return badRequest
    ? {
        navPath: "/",
        apiPath: "",
        decision: "BAD_REQUEST"
      }
    : isApproved
    ? {
        navPath: "/login",
        apiPath: "/decisionApproved",
        decision: "APPROVED"
      }
    : {
        navPath: "/disqualified",
        apiPath: "/decisionDenied",
        decision: "DENIED"
      };
};
