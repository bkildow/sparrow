import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={logo} alt="Sparrow Coaching" style={{ width: "250px" }} />
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/coaching">
          Coaching
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
