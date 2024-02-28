import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigate() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Dressed to Kill</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Schedule</Nav.Link>
            <NavDropdown title="Hosts" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Connor Nutt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Scott Wharton
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Comedians</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Navigate;