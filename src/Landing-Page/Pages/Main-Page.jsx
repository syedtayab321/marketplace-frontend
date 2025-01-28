import React from 'react';
import { Container, Row, Col, Image, Button, Navbar, Nav } from 'react-bootstrap';
import mainImage from './../assets/images/auto-part1.jpg';

const MainPage = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">AutoPartsHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="bg-light py-5">
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            <h1 className="display-4 fw-bold text-dark">Find the Best Auto Parts</h1>
            <p className="lead text-muted">
              Explore a wide range of high-quality auto parts for every make and model.
              Our mission is to keep your vehicles running smoothly.
            </p>
            <Button href="/shop" variant="dark" size="lg" className="me-3 mb-3">
              Shop Now
            </Button>
            <Button href="/contact" variant="outline-dark" size="lg" className="mb-3">
              Contact Us
            </Button>
          </Col>
          <Col lg={6} className="text-center">
            <Image
              src={mainImage}
              alt="Auto parts illustration"
              fluid
              style={{ borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
