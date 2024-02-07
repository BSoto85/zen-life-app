import React, { useState, useEffect } from "react";
import { getAllUsers } from "../api/fetch";
import "../index.css";

const LandingPage = ({ setUser }) => {
  const [user, setUserLocal] = useState({ names: { firstName: "" } });

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        if (data.length > 0) {
          const firstUser = data[0];
          setUserLocal(firstUser);
          setUser(firstUser);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch users", error);
      });
  }, [setUser]);

  const videoSource =
    "https://assets.mixkit.co/videos/preview/mixkit-huge-trees-in-a-large-green-forest-5040-large.mp4";

  return (
    <div className="landing-page-container">
      <div className="header-container">
        <video
          className="header-video"
          autoPlay
          muted
          loop
          style={{ border: "2px solid #ccc" }}
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="video-overlay">
          <div className="video-overlay-text">
            <h1>Welcome to Zen Life!</h1>
            <p>Explore, Relax, Unwind</p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <section
          className="section about-section"
          style={{ marginBottom: "20px" }}
        >
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt nisi eget fermentum luctus. Nullam tempus lacus vitae urna
            ullamcorper, vitae ullamcorper risus porta. Phasellus id enim
            auctor, bibendum turpis non, commodo lacus.
          </p>
        </section>
        <section
          className="section contact-section"
          style={{ marginBottom: "20px" }}
        >
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt nisi eget fermentum luctus. Nullam tempus lacus vitae urna
            ullamcorper, vitae ullamcorper risus porta. Phasellus id enim
            auctor, bibendum turpis non, commodo lacus.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
