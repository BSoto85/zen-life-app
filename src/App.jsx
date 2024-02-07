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

  return (
    <div className="app-style">
      <Header />
      <Quotes favorites={favorites} user={user} setFavorites={setFavorites} />
      <div className="content-wrapper">
        <Routes>
          <Route
            path="/"
            element={<LandingPage user={user} setUser={setUser} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/favorites"
            element={
              <Favorites favorites={favorites} setFavorites={setFavorites} />
            }
          />
          <Route path="/songs" element={<ListView />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
