import React from "react";
import { Provider } from "react-redux";

import { Routes } from "./routing";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
