import React, { useState } from "react";
import {
  Form,
  Button,
  FloatingLabel,
  Nav,
  Alert,
  Spinner,
} from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function Login() {
  const [logInData, setLogInData] = useState({});
  const { user, logIn, authError, isloading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  // form Control Function--------
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logInData };
    newLoginData[field] = value;
    setLogInData(newLoginData);
  };
  // Control  LogIN Function --------
  const handleLogin = (e) => {
    e.preventDefault();
    logIn(logInData.email, logInData.password, location, history);
  };
  return (
    <div className="w-50 m-auto my-5">
      <h1>Welcome Back Please Login </h1>
      {!isloading && (
        <Form onSubmit={handleLogin}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              onBlur={handleOnchange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onBlur={handleOnchange}
            />
          </FloatingLabel>
          <Nav.Link className="mx-2" as={Link} to="/register">
            New user please register
          </Nav.Link>

          <Button className="my-3 btn-custom-color text-light" type="submit">
            Login
          </Button>
        </Form>
      )}
      {isloading && <Spinner animation="border" />}

      {user?.email && <Alert variant="success">User LogIN successfully</Alert>}
      {authError && <Alert variant="danger">{authError}</Alert>}
    </div>
  );
}
