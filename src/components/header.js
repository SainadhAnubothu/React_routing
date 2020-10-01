import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./userstyles.css";

function Header() {
  return (
    <center>
      <Navbar className="background">
        <NavLink
          to="/Home"
          className="buttonStyle"
          activeClassName="buttonOnClick"
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className="buttonStyle"
          activeClassName="buttonOnClick"
          type="button"
        >
          Projects
        </NavLink>
        <NavLink
          to="/services"
          className="buttonStyle"
          activeClassName="buttonOnClick"
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className="buttonStyle"
          activeClassName="buttonOnClick"
        >
          Contact
        </NavLink>
      </Navbar>
    </center>
  );
}

export default Header;
