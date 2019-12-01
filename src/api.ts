import Questions from "./data/questions.json";
import LoginQuestions from "./data/loginQuestions.json";
import Login from "./data/login.json";

const apiEndpoint = "http://localhost:3004/";

const getJson = (resp: Response) => resp.json();

const fakeEndpoints = {
  "/questions": {
    success: Questions,
    failure: ""
  },
  "/login/questions": {
    success: LoginQuestions,
    failure: ""
  },
  "/login": {
    success: Login,
    failure: {}
  }
};

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

export const fakeFetch = (
  input: keyof typeof fakeEndpoints,
  info: RequestInfo | any
) => {
  const fakeData = fakeEndpoints[input];

  const shouldReturn = successOrFail({ endpoint: input, body: info.body });

  return new Promise((resolve, reject) => {
    if (shouldReturn) {
      const data = fakeData.success;
      // const response = new Response(data, {
      //   status: 200,
      //   statusText: "SUCCESS",
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // });
      setTimeout(() => {
        resolve(data);
      }, 1000);
    } else {
      const data = (fakeData.failure as unknown) as string;
      const response = new Response(data);
      setTimeout(() => {
        reject(response);
      }, 1000);
    }
  });
};

const headers: any = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getLandingQuestions = async () =>
  await fetch(`${apiEndpoint}landingPageQuestions`, { method: "GET" });

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
