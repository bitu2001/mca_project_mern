import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink
          className="navbar-brand nav-item active"
          exact
          activeClassName="active"
          to="/"
        >
          Navbar
        </NavLink>
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
                to="/"
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/signup"
              >
                Signup
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            {" "}
            {/* Change from mr-auto to ml-auto */}
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/doctor"
              >
                Doctor Panel
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/admin"
              >
                Admin Panel
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
