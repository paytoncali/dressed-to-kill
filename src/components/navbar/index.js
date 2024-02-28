import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigate() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="home">Dressed to Kill</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="schedule">Schedule</Nav.Link>
            <NavDropdown title="Hosts" id="basic-nav-dropdown">
              <NavDropdown.Item href="hosts">Connor Nutt</NavDropdown.Item>
              <NavDropdown.Item href="hosts">
                Scott Wharton
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="comedians">Comedians</Nav.Link>
            <Nav.Link href="contactus">Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Navigate;