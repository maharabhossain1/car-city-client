import React, { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";

export default function MakeAdmin() {
  const [email, setEmail] = useState();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
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
    <div>
      <div className="w-75 m-auto my-5">
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
          <Button variant="primary" type="submit">
            Make Admin
          </Button>
        </Form>
      </div>
    </div>
  );
}
