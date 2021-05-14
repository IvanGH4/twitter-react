import "./App.css";
import LoginPage from "./pages/LoginPage";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ExplorePage from "./pages/ExplorePage";

function App() {
  return (
    <Router>
      <PublicRoute restricted={true} component={LoginPage} exact path="/" />
      <Switch>
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/explorar" component={ExplorePage} />
        <PrivateRoute path="/perfil/:username" component={ProfilePage} />
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
