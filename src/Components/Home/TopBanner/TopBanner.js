import React from "react";
import { Carousel, Form, FormControl, Button } from "react-bootstrap";

export default function TopBanner() {
  const images = [
    "https://i.ibb.co/6YkfKhv/car13.jpg",
    "https://i.ibb.co/2qv0ncP/car12.webp",
    "https://i.ibb.co/KjDDvQ7/car11.webp",
    "https://i.ibb.co/cxLzWNP/car10.webp",
  ];
  return (
    <div>
      <Carousel variant="dark">
        {images.map((image) => {
          return (
            <Carousel.Item key={images.indexOf(image)}>
              <div className="mb-2">
                <img className="w-100 d-block" src={image} alt="First slide" />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
