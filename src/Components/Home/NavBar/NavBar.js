import React, { useState } from "react";
import "./NavBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../../../Image/Logo/Best Low Q.png";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(!click);

  return (
    <>
      <Navbar bg="dark" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand to="/">
            {" "}
            <img src={logo} className="img-fluid logo-icon" alt="" style={{width:'24px'}}/>{" "}
            <span className="logo1">
              {" "}
              <strong className="logo2">Saimum</strong> Biz
            </span>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  className=" my-nav ml-auto d-flex justify-content-around">
              <Link
                className="active ms-3"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                className="active ms-3"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
                
              >
                About
              </Link>
              <Link
                className="active me-3"
                to="service"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Service
              </Link>
              <Link
                className="active me-3"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Portfolio
              </Link>
              <Link
                className="active me-3"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
