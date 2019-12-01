import Questions from "./data/questions.json";
import LoginQuestions from "./data/loginQuestions.json";
import Login from "./data/login.json";

const apiEndpoint = "http://localhost:3004/";

const getJson = (resp: Response) => resp.json();

const successOrFail = (data: { endpoint: string; body: any }) => {
  switch (data.endpoint) {
    case "/questions":
    case "/login/questions":
      return true;
    case "/login":
      if (data.body.username && data.body.password) {
        return true;
      }
      return false;
    default:
      return false;
  }
};

const headers: any = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getLandingQuestions = async () =>
  await fetch(`${apiEndpoint}landingPageQuestions`, {
    ...headers,
    method: "GET"
  }).then(getJson);

export const getLoginQuestions = () =>
  fetch(`${apiEndpoint}loginPageQuestions`, {
    ...headers,
    method: "GET"
  }).then(getJson);

// export const postLogin = async (data?: {
//   username: string;
//   password: string;
// }) => {
//   return await fakeFetch("/login", {
//     ...fakeRequestInfo,
//     method: "POST",
//     body: JSON.stringify(data)
//   });
// };

type IAnswers<T> = {
  [P in keyof T]: {
    value: string | number;
  };
};

export const postApplication = (data: IAnswers<typeof Questions>) =>
  data.question1.value;
