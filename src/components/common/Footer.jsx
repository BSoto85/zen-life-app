import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-div">
      <p className="footer-p">
        Slice of Pi <span className="footer-span">Copyright {year}</span>
      </p>
    </div>
  );
};

export default Footer;
