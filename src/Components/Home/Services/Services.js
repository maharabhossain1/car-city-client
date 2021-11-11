import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { GrDeliver } from "react-icons/gr";

import Cart from "./Cart/Cart";

export default function Services() {
  const [sheba, setSheba] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setSheba(data));
  }, []);

  return (
    <div className="my-3" id="services">
      <div className="m-5 p-2 home-text ">
        <h1>
          <GrDeliver className="text-custom-color" /> Our Services
        </h1>
      </div>
      <Container>
        <Row xs={1} md={2} lg={3} className="justify-content-evenly m-auto">
          {sheba.map((shebaMini) => (
            <Cart key={shebaMini._id} shebaMini={shebaMini} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
