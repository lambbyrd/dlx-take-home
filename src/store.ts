import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import validationMiddleware from "./validation";

const initializeStore = (initialState: any) => {
  const middleWares = applyMiddleware(thunk, validationMiddleware);

  const enhancers = [middleWares];
  const composedWithDevTools = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, initialState, composedWithDevTools);
  return store;
};

export default initializeStore;
