import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.user);
  console.log(Object.entries(isLoggedIn).length > 0);
  return (
    <Route
      {...rest}
      render={(props) =>
        restricted && Object.entries(isLoggedIn).length > 0 ? (
          <Redirect to="/home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
