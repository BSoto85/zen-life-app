import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Quotes from "./components/common/Quotes";
import About from "./components/About";
import Favorites from "./components/Favorites";
import ListView from "./components/ListView";

import { getAllUsers } from "./api/fetch";
import bgImage from "./source/css-pattern-by-magicpattern.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState({});
  const location = useLocation();

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        if (data && data.length > 0) {
          setUser(data[0]);
          setFavorites(data[0].savedQuotes || []);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch users", error);
      });
  }, []);

  const appStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
  };

  return (
    <div style={appStyle}>
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route
            path="/"
            element={<LandingPage user={user} setUser={setUser} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<ProfileView />} />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                setFavorites={setFavorites}
                user={user}
              />
            }
          />
          <Route path="/songs" element={<ListView />} />
        </Routes>
        <Quotes favorites={favorites} user={user} setFavorites={setFavorites} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
