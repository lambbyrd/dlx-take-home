import * as React from "react";
import { get } from "lodash";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

interface IAuthRoute {
  path: string;
  children: React.ReactNode;
}

export const AuthRoute = (props: IAuthRoute) => {
  const { path, children } = props;
  const [isAuthenticated] = useSelector(state => [
    get(state, "user.isAuthenticated")
  ]);
  return (
    <Route
      path={path}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
