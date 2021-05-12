import "./App.css";
import LoginPage from "./pages/LoginPage";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <PublicRoute restricted={false} component={LoginPage} exact path="/" />
      <Switch>
        <PrivateRoute path="/home" component={HomePage} />
        <PublicRoute
          restricted={true}
          path="/registro"
          component={RegisterPage}
        />
      </Switch>
    </Router>
  );
}

export default App;
