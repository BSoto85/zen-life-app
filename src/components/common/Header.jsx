import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../sidebar.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        fixed="top"
        className="fixed-top"
        style={{ height: "80px", display: "flex", alignItems: "center" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            Zen Life
          </Navbar.Brand>
          <Nav className="d-none d-md-flex align-items-center">
            <Nav.Link as={Link} to="/" className="navbar-btn home-btn">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="navbar-btn">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites" className="navbar-btn">
              Favorites
            </Nav.Link>
            <Nav.Link as={Link} to="/songs" className="navbar-btn">
              Songs
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
            <FaBars />
          </Button>
        </Container>
      </Navbar>
      <div
        ref={sidebarRef}
        className={`offcanvas offcanvas-end${isSidebarOpen ? " show" : ""}`}
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        style={{ width: "250px" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Menu
          </h5>
          <Button
            type="button"
            className="btn-close"
            onClick={toggleSidebar}
            aria-label="Close"
          ></Button>
        </div>
        <div className="offcanvas-body">
          <ul
            className="navbar-nav justify-content-end flex-grow-1 pe-3"
            style={{ alignItems: "center" }}
          >
            <li
              className="nav-item"
              style={{ fontSize: "20px", margin: "20px 0" }}
            >
              <Link to="/" className="nav-link" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ fontSize: "20px", margin: "20px 0" }}
            >
              <Link to="/about" className="nav-link" onClick={toggleSidebar}>
                About
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ fontSize: "20px", margin: "20px 0" }}
            >
              <Link
                to="/favorites"
                className="nav-link"
                onClick={toggleSidebar}
              >
                Favorites
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ fontSize: "20px", margin: "20px 0" }}
            >
              <Link to="/songs" className="nav-link" onClick={toggleSidebar}>
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
