import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
function App() {
  const [firebaseUser, setFaribaseUser] = React.useState(false);
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setFaribaseUser();
      } else {
        setFaribaseUser(null);
      }
    });
  }, []);
  return firebaseUser !== false ? (
    <Router>
      <div className="container">
        <Navbar firebaseUser={firebaseUser} />
        <Switch>
          <Route path="/" exact>
            inicio...
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </div>
    </Router>
  ) : (
    <p>Cargando...</p>
  );
}

export default App;
