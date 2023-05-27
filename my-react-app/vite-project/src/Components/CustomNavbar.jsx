import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Action 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#signup">Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
