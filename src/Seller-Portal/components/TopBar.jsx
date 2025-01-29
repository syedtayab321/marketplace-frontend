import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaBell, FaUserCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Topbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-2">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4 text-uppercase">
          BrandName
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="mx-2 text-light fw-semibold">Home</Nav.Link>
            <Nav.Link href="#features" className="mx-2 text-light fw-semibold">Features</Nav.Link>
            <Nav.Link href="#pricing" className="mx-2 text-light fw-semibold">Pricing</Nav.Link>

            <Nav.Link href="#notifications" className="mx-2 text-light">
              <FaBell size={20} />
            </Nav.Link>

            <NavDropdown
              title={<FaUserCircle size={24} className="text-light" />}
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout" className="text-danger">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;