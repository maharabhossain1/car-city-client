import React, { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

export default function MakeAdmin() {
  const [email, setEmail] = useState();
  const { user } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://powerful-meadow-94521.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    e.preventDefault();
  };
  return (
    <div className="border-custom-color w-75 m-auto my-4 p-2">
      <div className="m-auto my-4 text-custom-color div-custom">
        <h1> Hey Admin , {user.displayName}</h1>
        <h4>
          If You Want To make Any User Admin , Please Fill Up the Form By User
          Email{" "}
        </h4>
      </div>
      <div className="m-auto my-5">
        <Form onSubmit={handleAdminSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              onBlur={handleOnBlur}
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <Button className="btn-custom-color" type="submit">
            Make Admin
          </Button>
        </Form>
      </div>
    </div>
  );
}
