import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../Images/Logo-2-02 (1).png";
import "./Header.css";
const Header = () => {
  // State to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Event handlers
  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  // Event handlers
  const handleDropdownMouseEnter1 = () => {
    setIsDropdownOpen1(true);
  };

  const handleDropdownMouseLeave1 = () => {
    setIsDropdownOpen1(false);
  };
  return (
    <Navbar className="container navbar">
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navlist">
            <Nav.Link href="#home" className="home">
              Home
            </Nav.Link>

            <NavDropdown
              title="Jewellery ERP Software"
              id="basic-nav-dropdown"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              show={isDropdownOpen}>
              <NavDropdown.Item href="#action/3.1" className="navitem">
                -Jewellery-Retailer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="navitem">
                -Jewellery-Wholesaler
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="navitem">
                -Jewellery-Manufacturer
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Knowledge Base"
              id="basic-nav-dropdown"
              onMouseEnter={handleDropdownMouseEnter1}
              onMouseLeave={handleDropdownMouseLeave1}
              show={isDropdownOpen1}>
              <NavDropdown.Item href="#action/3.3">
                Must Watch Video
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our Client</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Growth Mantras
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">FAQ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="aboutus">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#home">
              <button>Growth Mantras</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
