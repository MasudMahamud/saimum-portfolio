import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import logo from "../../../Image/Logo/Best Low Q.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(!click);

  return (
    <div className="container">
    <div className="row">
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className="logo">
        <img
          src={logo}
          alt=""
          className="img-fluid logo-icon"
          style={{ width: "20px", marginLeft: "35px" }}
        />
        <strong className="saimun">Saimum</strong>{" "}
        <span className="logo1">Biz</span>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeMenu}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeMenu}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    </div>
    </div>
  );
};

export default NavBar;
