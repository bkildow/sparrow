import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

class Navbar extends React.Component {
  state = { isToggleOn: false };

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };

  render() {
    const mobileMenuActiveClass = this.state.isToggleOn ? "is-active" : "";

    return (
      <div className="container">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img
                src={logo}
                alt="Sparrow Coaching"
                style={{ width: "250px" }}
              />
            </Link>
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              href={false}
              onClick={this.handleClick}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={`navbar-menu ${mobileMenuActiveClass}`}>
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
      </div>
    );
  }
}

export default Navbar;
