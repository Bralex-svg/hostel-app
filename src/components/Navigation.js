import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css'
import Button from 'react-bootstrap/button'

function Navigation() {
    return (
        <>
       <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand className = 'brand' href="#home">GIDAN</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="me-auto">
      <Nav className="links">

 
        <Nav.Link  href="#home">Home</Nav.Link>
        <Nav.Link  href="#link">About</Nav.Link>
        <Nav.Link  href="#link">Contact</Nav.Link>
        <Nav.Link   href="#link">Trending Hostels</Nav.Link>
        </Nav>
    
  
      </Nav>
      <Button className="btn">Sign up or Log in</Button>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Navigation
