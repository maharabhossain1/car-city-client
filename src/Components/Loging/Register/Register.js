import React, { useState } from "react";
import {
  FloatingLabel,
  Form,
  Nav,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function Register() {
  const [logInData, setLogInData] = useState({});
  const { registerUser, isloading, user, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();

  // Form Control
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logInData };
    newLoginData[field] = value;
    setLogInData(newLoginData);
  };
  //  Register Function
  const handleLogin = (e) => {
    e.preventDefault();

    if (logInData?.password !== logInData?.password2) {
      alert("Your passowrd Donot match");
      return;
    }
    registerUser(
      logInData.email,
      logInData.password,
      logInData.name,
      location,
      history
    );
  };
  return (
    <div className="w-50 m-auto my-5">
      <h1> register</h1>
      {isloading && <Spinner animation="border" />}
      {!isloading && (
        <Form onSubmit={handleLogin}>
          <FloatingLabel
            controlId="floatingInputName"
            label="Your Name"
            className="mb-2"
          >
            <Form.Control type="text" name="name" onBlur={handleOnBlur} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputEmail"
            label="Email address"
            className="mb-2"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              onBlur={handleOnBlur}
            />
          </FloatingLabel>
          <FloatingLabel
            className="mb-2"
            controlId="floatingPassword"
            label="Password"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onBlur={handleOnBlur}
            />
          </FloatingLabel>
          <FloatingLabel
            className="mb-2"
            controlId="floatingPassword2"
            label="Confirm Password"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              name="password2"
              onBlur={handleOnBlur}
            />
          </FloatingLabel>
          <Nav.Link className="mx-2" as={Link} to="/login">
            Already have an account ? please go to log in
          </Nav.Link>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      )}
      {user?.email && <Alert variant="success">User LogIN successfully</Alert>}
      {authError && <Alert variant="danger">{authError}</Alert>}
    </div>
  );
}
