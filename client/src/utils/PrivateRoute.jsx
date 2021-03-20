import React from 'react';
import { useSelector } from 'react-redux';
import { isAuthenticated, userRoles } from '../store/auth/selectors';

const PrivateRoute = ({ component, ...rest }) => {
  const auth = useSelector(userRoles())[0] === "ROLE_ADMIN";
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          component
        ) : (
          <Redirect
            to={{
              pathname: "/user-login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute
