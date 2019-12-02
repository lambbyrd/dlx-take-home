const apiEndpoint = "http://localhost:3004/";

const getJson = (resp: Response) => resp.json();

const headers: any = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getLandingQuestions = () =>
  fetch(`${apiEndpoint}landingPageQuestions`, {
    ...headers,
    method: "GET"
  }).then(getJson);

export const getLoginQuestions = () =>
  fetch(`${apiEndpoint}loginPageQuestions`, {
    ...headers,
    method: "GET"
  }).then(getJson);

export const getBadRequest = () =>
  fetch(`${apiEndpoint}landingPageQuestions`, {
    ...headers,
    method: "d"
  }).then(getJson);

export const getDecision = (endPoint: string) =>
  fetch(`${apiEndpoint}${endPoint}`, {
    ...headers,
    method: "GET"
  }).then(getJson);

export const getToken = () =>
  fetch(`${apiEndpoint}auth`, { ...headers, method: "GET" }).then(getJson);

export const postUser = (data: { username: string; password: string }) =>
  fetch(`${apiEndpoint}user`, {
    ...headers,
    method: "POST",
    body: JSON.stringify(data)
  }).then(getJson);
