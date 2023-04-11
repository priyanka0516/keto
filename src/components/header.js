import React, { Component } from 'react';
import './style.css';
import './responsive.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
class Header extends Component {
  render() {
   return(  
      <Navbar expand="lg" className="p-3">
      <Container>
        <Navbar.Brand href="#home">
        <img src={require('./../images/logo.png')} alt="logo"/>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" sticky="top">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/room">Our room</Link>
            <Link className="nav-link" to="/gallery">Gallery</Link>
            <Link className="nav-link" to="/blog">Blog</Link>
            <Link className="nav-link" to="/contact">Contact US</Link>         
          </Nav>
        </Navbar.Collapse>    
      </Container>
    </Navbar>
  
    )
}
}
export default Header;