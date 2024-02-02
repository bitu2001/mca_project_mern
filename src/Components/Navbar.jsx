import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
        <div className="container-xl">
          <a className="navbar-brand" href="#">
            <img
              src="https://preview.webpixels.io/web/img/logos/clever-light.svg"
              className="h-8"
              alt="..."
            />
          </a>
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
              <a
                className="nav-item nav-link active"
                href="#"
                aria-current="page"
              >
                Home
              </a>
              <a className="nav-item nav-link" href="#">
                Product
              </a>
              <a className="nav-item nav-link" href="#">
                Features
              </a>
              <a className="nav-item nav-link" href="#">
                Pricing
              </a>
            </div>

            <div className="navbar-nav ms-lg-4">
              <a className="nav-item nav-link" href="#">
                Sign in
              </a>
            </div>
            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
              <a href="#" className="btn btn-sm btn-primary w-full w-lg-auto">
                Register
              </a>
            </div>
            <form className="flex items-center ms-4 lg:ms-8">
              <input
                className="border border-gray-300 bg-white px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-primary ml-3 focus:outline-none focus:ring focus:border-blue-300"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
