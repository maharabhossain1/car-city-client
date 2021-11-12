import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Cart from "../Home/Services/Cart/Cart";

export default function Explore() {
  const [allCars, setAllCars] = useState([]);
  useEffect(() => {
    fetch("https://powerful-meadow-94521.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setAllCars(data));
  }, []);
  return (
    <div>
      <div className="w-75 m-auto my-5 div-custom text-center">
        <h2>Here Is Our All Car Collection You Can Order What Ever You want</h2>
      </div>
      <div>
        <Container>
          <Row xs={1} md={2} lg={3} className="justify-content-evenly m-auto">
            {allCars.map((car) => (
              <Cart key={car._id} shebaMini={car} />
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
