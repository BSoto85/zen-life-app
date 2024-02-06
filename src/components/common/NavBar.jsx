import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          Zen Life
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="home-section"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link distinctive-link"
              >
                Home
              </Link>
            </li>

            {/* Other links */}
            <li className="nav-item">
              <Link
                to="features-section"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="pricing-section"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about-section"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
