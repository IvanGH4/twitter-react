import { useSelector } from "react-redux";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        Object.entries(isLoggedIn).length > 0 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
