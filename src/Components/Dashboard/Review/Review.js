import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { FloatingLabel, Form } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

export default function Review() {
  const [value, setValue] = React.useState(2);
  const { user } = useAuth();
  const basicInfo = {
    name: user.displayName,
    email: user.email,
    rating: value,
  };
  const [reviewData, setReviewData] = React.useState(basicInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...reviewData };
    newInfo[field] = value;
    setReviewData(newInfo);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch("https://powerful-meadow-94521.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Dear User , Your Order added succesfully");
        }
        e.target.reset();
        setReviewData(basicInfo);
      });
  };
  return (
    <div>
      <div className="w-75 m-auto text-center my-4">
        <h3> Dear User </h3>
        <h5>
          In this section You will be able to Give Your Review To use . Please
          Give A reating and Comment
        </h5>
      </div>
      <div className="w-75 m-auto text-center my-5">
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            size="large"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
        <Form onSubmit={handleOnSubmit}>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              name="comment"
              onBlur={handleOnBlur}
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Form.Control
            type="submit"
            value="Add a New Service"
            className="my-3 btn-custom-color text-light"
          />
        </Form>
      </div>
    </div>
  );
}

// <Typography component="legend">Read only</Typography>
// <Rating name="read-only" value={value} readOnly />
