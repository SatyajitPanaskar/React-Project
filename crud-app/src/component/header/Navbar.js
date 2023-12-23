import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const NavbarMain = () => {
  return (
    <>
      <Navbar expand="lg" className="Nav_header">
        <Container>
          <Navbar.Brand href="#" className="logo">
            EMP DATA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbarlist">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create Data</Nav.Link>
              <Nav.Link href="/edit">Update Data</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search-btn"
                aria-label="Search"
                required
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
