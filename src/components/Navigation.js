import React from 'react';
import { Nav, Navbar, Form, FormControl, Container } from 'react-bootstrap';
import styled from 'styled-components';
import buttoncolor from '../App.css';
const Styles = styled.div`
  .navbar { background-color:#22598b;}
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .align{
      padding: 20px;
  }
`;
const Navigation = () => (

  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Welcome</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
    
        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/">Login</Nav.Link></Nav.Item>

          <Nav.Item><Nav.Link href="/register">Register
          </Nav.Link></Nav.Item>
          
        </Nav>
      </Navbar.Collapse>
    
    </Navbar>
  </Styles>

)
export default Navigation