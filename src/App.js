import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Loging/Login/Login";
import PrivateRoute from "./Components/Loging/PrivateRoute/PrivateRoute";
import Register from "./Components/Loging/Register/Register";
import Servicing from "./Components/Servicing/Servicing/Servicing";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Explore from "./Components/Explore/Explore";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/explorecars">
              <Explore />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/servicing/:serviceId">
              <Servicing />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
