import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddService from "./Components/AddService/AddService";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Loging/Login/Login";
import PrivateRoute from "./Components/Loging/PrivateRoute/PrivateRoute";
import Register from "./Components/Loging/Register/Register";
import MyOrders from "./Components/MyOrders/MyOrders";
import Servicing from "./Components/Servicing/Servicing/Servicing";
import AuthProvider from "./context/AuthProvider/AuthProvider";
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
            <PrivateRoute path="/myorder">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/addcar">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/servicing/:serviceId">
              <Servicing />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
