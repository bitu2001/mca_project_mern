import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/notification"
              >
                Notification
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/orderpage"
              >
                Book an appointment
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/"
              >
                Doctor Pannel
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/"
              >
                Admin Pannel
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
