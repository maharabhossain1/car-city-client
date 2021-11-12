import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaUserTie } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GiDeliveryDrone } from "react-icons/gi";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      className="my-nav btn-custom-color"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <GiDeliveryDrone className="fs-1" /> Car City
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="me-auto">
            <Nav.Link className="mx-2" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/allcars">
              Explore
            </Nav.Link>

            {user?.email && (
              <>
                <Nav.Link className="mx-2" as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
              </>
            )}

            <Navbar.Text>
              <FaUserTie className="text-light fs-4" />
              <span className="mx-2 text-light">{user?.displayName}</span>
            </Navbar.Text>
            {user?.email ? (
              <Button className="mx-2" onClick={logOut} variant="light">
                <FiLogOut /> Logout
              </Button>
            ) : (
              <Nav.Link className="mx-2" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
