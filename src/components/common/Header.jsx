import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import videoSource from "/Users/sincereclarke/Development/module-three/zen-life-app/src/sources/mixkit-huge-trees-in-a-large-green-forest-5040.mp4"; // Make sure to use the correct path
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
        variant="light"
        fixed="top"
        expand="lg"
        className="transparent-navbar"
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="text-dark">
            Zen Life
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleSidebar}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="text-dark">
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-dark">
                Pricing
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="header-container">
        <video className="header-video" autoPlay muted loop>
          {/* <source src={videoSource} type="video/mp4" />
          Your browser does not support HTML5 video. */}
        </video>
        <div className="video-overlay-text">
          <h1>Welcome to Zen Life</h1>
          <p>Explore the beauty of nature.</p>
        </div>
      </div>
      {isSidebarOpen && (
        <>
          <div className="overlay" onClick={toggleSidebar}></div>
          <div className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
            <div className="sidebar-header">
              <h2>Dashboard</h2>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#feedback">Feedback</a>
              </li>
            </ul>
            <div className="sidebar-footer">
              <p>Footer Content</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
