import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthRoute } from "./AuthRoute";

import { StartLoan, DecisionPage, Login, DeclinePage } from "../containers";

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
        <Route path="/decline">
          <DeclinePage />
        </Route>
        <AuthRoute path="/decision">
          <DecisionPage />
        </AuthRoute>
      </Switch>
    </Router>
  );
};
