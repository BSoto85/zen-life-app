import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      <div className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
        <div className="sidebar-footer">
          <p>Footer Content</p>
        </div>
      </div>
      {isOpen && (
        <button className="exit-btn" onClick={toggleSidebar}>
          ×
        </button>
      )}
    </>
  );
};

export default Sidebar;
