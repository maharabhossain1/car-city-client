import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

export default function OrderForm({ title }) {
  const { user } = useAuth();
  const basicInfo = {
    name: user.displayName,
    email: user.email,
    carModel: "",
    status: "Pending",
    phone: "",
  };
  const [orderData, setOrderData] = useState(basicInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderData };
    newInfo[field] = value;
    setOrderData(newInfo);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Dear User , Your Order added succesfully");
        }
        e.target.reset();
        setOrderData(basicInfo);
      });
  };

  return (
    <div className="w-75 m-auto my-5">
      <div className=" my-4">
        <h1>Hello {user?.displayName} </h1>
        <h4>
          If you want to add new service , <br /> please fill up the form and
          submit and then go to the Home{" "}
        </h4>
      </div>
      <Form onSubmit={handleOnSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Car Model"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="carModel"
            onBlur={handleOnBlur}
            defaultValue=""
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Phone Number"
          className="mb-3"
        >
          <Form.Control
            type="number"
            name="phone"
            onBlur={handleOnBlur}
            defaultValue=""
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Address"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            onBlur={handleOnBlur}
            name="address"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Form.Control
          type="submit"
          className="my-3 btn-custom-color text-light"
        />
      </Form>
    </div>
  );
}
