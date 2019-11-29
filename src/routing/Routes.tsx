import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthRoute } from "./AuthRoute";

import { StartLoan, RestOfLoan, Login } from "../containers";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/start">
          <StartLoan />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <AuthRoute path="/rest">
          <RestOfLoan />
        </AuthRoute>
      </Switch>
    </Router>
  );
};
