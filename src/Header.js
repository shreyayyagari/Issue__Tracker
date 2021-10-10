import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
          <Navbar expand="lg">
  <Container>
      <Link to='/'>
  <Navbar.Brand className="navlinkstyl1">TRACK IT</Navbar.Brand>
  </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link className="navlinkstyl"><Link to ='/'>Home</Link></Nav.Link>
        <Nav.Link className="navlinkstyl"><Link to="/Login">Login</Link></Nav.Link>       
        <Nav.Link className="navlinkstyl"><Link to ='/Contact'>Contact Us</Link></Nav.Link> 
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>  
        </div>
    )
}

export default Header;
