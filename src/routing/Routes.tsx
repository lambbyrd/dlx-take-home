import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthRoute } from "./AuthRoute";

import { StartLoan, Decision, Login } from "../containers";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StartLoan />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <AuthRoute path="/decision">
          <Decision />
        </AuthRoute>
      </Switch>
    </Router>
  );
};
