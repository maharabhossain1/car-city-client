import React, { useState } from "react";
import { Form, Button, FloatingLabel, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  const [logInData, setLogInData] = useState({});
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logInData };
    newLoginData[field] = value;
    setLogInData(newLoginData);
  };
  console.log(logInData);
  const handleLogin = (e) => {
    alert("hello bro");
    e.preventDefault();
  };
  return (
    <div className="w-50 m-auto my-5">
      <h1>this is log in</h1>
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
            onChange={handleOnchange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleOnchange}
          />
        </FloatingLabel>
        <Nav.Link className="mx-2" as={Link} to="/register">
          New user please register
        </Nav.Link>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
