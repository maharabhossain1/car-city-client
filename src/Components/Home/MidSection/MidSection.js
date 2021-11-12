import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MidSection.css";

export default function MidSection() {
  return (
    <div className="mid-section my-2">
      <Container>
        <Row xs={1} md={2} lg={2} className="justify-content-evenly">
          <Col className=" d-flex align-items-center justify-content-center">
            <div>
              <img
                src="https://i.ibb.co/KXfQC92/rolls-royce-spectre.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <div>
              <div className="w-50">
                <hr />
                <hr />
              </div>
              <div className="home-text">
                <h1>The Mercedes-Benz AG at a glance.</h1>
                <p>
                  Mercedes-Benz AG is responsible for the global business of
                  Mercedes-Benz Cars and Mercedes-Benz Vans, with over 170,000
                  employees worldwide. Ola Källenius is Chairman of the Board of
                  Management of Mercedes-Benz AG. The company focuses on the
                  development, production and sales of passenger cars, vans and
                  vehicle-related services. Furthermore, the company aspires to
                  be the leader in the fields of electric mobility and vehicle
                  software. The product portfolio comprises the Mercedes-Benz
                  brand with the sub-brands of Mercedes-AMG, Mercedes-Maybach,
                  Mercedes-EQ, G-Class and the smart brand. The Mercedes me
                  brand offers access to the digital services from
                  Mercedes-Benz.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
