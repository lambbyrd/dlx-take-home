import React from "react";
import { Provider } from "react-redux";

import { Routes } from "./routing";
import intializeStore from "./store";
import "./App.css";

const initialState = {
  user: {
    isAuthenticated: false
  },
  questions: {},
  answers: {},
  errors: {}
};

const App: React.FC = () => {
  return (
    <Provider store={intializeStore(initialState)}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
};

export default App;
