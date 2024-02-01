import React from "react";
import {
  Link,
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "../Styles/Navbar.css";

// Dummy components for Login and Signup
const Login = () => <h2>Login Page</h2>;
const Signup = () => <h2>Signup Page</h2>;

function Navbar() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
          <div className="container-xl">
            <Link className="navbar-brand" to="/">
              {/* Your logo */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-lg-auto">
                <NavLink
                  exact
                  to="/"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/product"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  Product
                </NavLink>
                <NavLink
                  to="/about"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  About us
                </NavLink>
              </div>
              <div className="navbar-nav ms-lg-4">
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div className="navbar-nav ms-lg-4 ml-5">
                <Link to="/login" className="nav-item nav-link">
                  Log in
                </Link>
              </div>
              <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                <Link
                  to="/signup"
                  className="btn btn-sm btn-primary w-full w-lg-auto"
                >
                  SignUp
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* Add other routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
