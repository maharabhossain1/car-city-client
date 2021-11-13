import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
export default function ManageAllProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://powerful-meadow-94521.herokuapp.com/cars`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  // Delete function
  const handleUserID = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://powerful-meadow-94521.herokuapp.com/cars/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };
  return (
    <div>
      <div>
        <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/v1bLykC/9.jpg"
            alt=""
          />
        </div>
        <div className=" my-4 home-text w-75 m-auto">
          <h1>Hello Admin </h1>
          <h4>
            Here is your All Users Orders , <br /> your can delete your order
            and also update your order status{" "}
          </h4>
        </div>
      </div>
      <Container>
        <Row xs={1} md={2} lg={3} className="justify-content-evenly m-auto">
          {products.map((product) => {
            const { title, img, detail, _id } = product;
            return (
              <Card className="my-1" key={_id} style={{ width: "26.5rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{detail}</Card.Text>
                  <Button
                    className="bg-danger"
                    onClick={() => {
                      handleUserID(_id);
                    }}
                  >
                    <span>Delete This Car Model</span> X
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
