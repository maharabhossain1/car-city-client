import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart({ shebaMini }) {
  const { img, title, detail, _id } = shebaMini;
  return (
    <div className="my-2">
      <Card className="m-auto" style={{ width: "26.5rem" }}>
        <div>
          <Card.Img variant="top" src={img} className="img-fluid " />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{detail}</Card.Text>
          <Link to={`/servicing/${_id}`}>
            <Button variant="primary" className="btn-custom-color">
              {" "}
              Click for Order
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
