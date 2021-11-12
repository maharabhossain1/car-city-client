import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from "react";
import { MdRateReview } from "react-icons/md";
import { Container, Row } from "react-bootstrap";

export default function DisplayReview() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://powerful-meadow-94521.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="m-5 p-2 home-text ">
        <h1>
          <MdRateReview className="text-custom-color" /> Customer Review
        </h1>
      </div>
      <div>
        <Container>
          <Row xs={1} md={3} lg={5} className="justify-content-evenly m-auto">
            {reviews.map((review) => {
              const { name, rating, comment, _id } = review;
              return (
                <div key={_id}>
                  <div className="bg-light p-3 my-2 ">
                    <h5>{name}</h5>
                    <p>{comment}</p>
                    <Rating name="disabled" value={rating} disabled />
                  </div>
                </div>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}
