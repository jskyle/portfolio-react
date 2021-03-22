import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router";
import { isAuthenticated, userRoles } from '../store/auth/selectors';

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useSelector(userRoles())[0] === "ROLE_ADMIN";
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute
