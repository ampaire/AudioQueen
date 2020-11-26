import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { 
    background-color: green;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  a, .navbar-nav, .navbar-light .nav-link {
    text-decoration: none;
    padding: 1%;
    color: #9FFFCB;
    &:hover { color: red; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    padding: 1%;
    right: 25%;
  }
`;
export const Header = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">AudioQUeen</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="p-2" />
      </Form>
        <Nav className="ml-auto d-flex">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav>
    </Navbar>
  </Styles>
)
