import "./App.css";
import LoginPage from "./pages/LoginPage";
import PublicRoute from "./components/PublicRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <PublicRoute restricted={false} component={LoginPage} exact path="/" />
      <Switch>
        <Route path="/home" component={HomePage} />
        <PublicRoute
          restricted={false}
          path="/registro"
          component={RegisterPage}
        />
      </Switch>
    </Router>
  );
}

export default App;
