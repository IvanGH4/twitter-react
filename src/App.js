import "./App.css";
import LoginPage from "./pages/LoginPage";
import PublicRoute from "./components/PublicRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <PublicRoute restricted={false} component={LoginPage} exact path="/" />
      <Switch>
        <Route path="/home" render={() => <h1>Hola</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
