import React from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../assets/css/navbar.css";
import logo from "./../assets/images/background.jpg";

const AppNavbar = () => {

  return (
      <>
       <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Easy Case"
            style={{
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <span className="fw-bold">Easy Case</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="/services" className="text-white ">
              Services
            </Nav.Link>
            <Nav.Link href="/contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={<span className="text-white">Account</span>}
              id="account-dropdown"
              align="end"
              className="text-white"
            >
              <NavDropdown.Item href='/seller-signup'>
                <Button href='/seller-signup'  variant="outline-dark" className="ms-3 px-4 fw-bold">
                   Seller Registration
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item href='/seller-login'>
                <Button href="/seller-login" variant="dark" className="ms-3 px-4 fw-bold">
                   Buyer Registration
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
            <Button
              href="/seller-login"
              variant="outline-light"
              className="ms-3 px-4 fw-bold"
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
  );
};

export default AppNavbar;
