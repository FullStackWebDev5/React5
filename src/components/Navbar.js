import React from "react";
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <BootstrapNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <BootstrapNavbar.Brand href="#home">
          Social Media Site
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/posts"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Posts
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/count"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Count
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
