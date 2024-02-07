import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../sidebar.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        fixed="top"
        className="fixed-top"
        style={{ height: "80px" }}
      >
        <Container style={{ marginTop: "10px" }}>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontSize: "32px",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            Zen Life
          </Navbar.Brand>
          <Nav className="ml-auto d-none d-md-flex">
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: "#fff", marginRight: "10px" }}
            >
              Home
              <div className="hover-line"></div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              style={{ color: "#fff", marginRight: "10px" }}
            >
              About
              <div className="hover-line"></div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/profile"
              style={{ color: "#fff", marginRight: "10px" }}
            >
              Profile
              <div className="hover-line"></div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/favorites"
              style={{ color: "#fff", marginRight: "10px" }}
            >
              Favorites
              <div className="hover-line"></div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/songs"
              style={{ color: "#fff", marginRight: "10px" }}
            >
              Songs
              <div className="hover-line"></div>
            </Nav.Link>
          </Nav>
          <Button
            className="d-md-none"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "24px",
            }}
          >
            <FaBars style={{ transform: "rotate(45deg)" }} />
          </Button>
        </Container>
      </Navbar>

      <div
        className={`offcanvas offcanvas-end${isSidebarOpen ? " show" : ""}`}
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Offcanvas
          </h5>
          <Button
            type="button"
            className="btn-close"
            onClick={toggleSidebar}
            aria-label="Close"
          ></Button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/favorites" className="nav-link">
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/songs" className="nav-link">
                Songs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
