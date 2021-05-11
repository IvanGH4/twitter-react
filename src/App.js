import "./App.css";
import LoginPage from "./pages/LoginPage";
import PublicRoute from "./components/PublicRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <PublicRoute restricted={false} component={LoginPage} exact path="/" />
      <Switch>
        <Route path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
