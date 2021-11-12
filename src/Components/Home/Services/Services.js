import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { GrDeliver } from "react-icons/gr";
import { Link } from "react-router-dom";

import Cart from "./Cart/Cart";

export default function Services() {
  const [sheba, setSheba] = useState([]);
  useEffect(() => {
    fetch("https://powerful-meadow-94521.herokuapp.com/carlimit")
      .then((res) => res.json())
      .then((data) => setSheba(data));
  }, []);

  return (
    <div className="my-3" id="services">
      <div className="m-5 p-2 home-text ">
        <h1>
          <GrDeliver className="text-custom-color" /> Our Cars
        </h1>
      </div>
      <Container>
        <Row xs={1} md={2} lg={3} className="justify-content-evenly m-auto">
          {sheba.map((shebaMini) => (
            <Cart key={shebaMini._id} shebaMini={shebaMini} />
          ))}
        </Row>
      </Container>
      <div className="w-25 m-auto">
        <Link to={`/explorecars`}>
          <Button variant="primary" className="btn-custom-color">
            {" "}
            Want To Explore ! More Click Here
          </Button>
        </Link>
      </div>
    </div>
  );
}
