import React from "react";
import "../index.css";
import { Card } from "react-bootstrap";

const LandingPage = () => {
  const videoSource =
    "https://assets.mixkit.co/videos/preview/mixkit-huge-trees-in-a-large-green-forest-5040-large.mp4";

  return (
    <div className="landing-page-container">
      <div className="header-container">
        {/* Video Section */}
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
        {/* Desktop Text Overlay */}
        <div className="video-overlay video-overlay-text">
          <h1>Welcome to Zen Life!</h1>
          <p>Explore, Relax, Unwind</p>
        </div>
        {/* Mobile Text UI */}
        <div className="mobile-text-ui">
          <Card bg="dark" text="white">
            <Card.Body>
              <Card.Title>Welcome to Zen Life!</Card.Title>
              <Card.Text>Explore, Relax, Unwind</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
