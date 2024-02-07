import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
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

  const { id } = useParams();

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUser(data[0]);
        setFavorites(data[0].savedQuotes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Quotes favorites={favorites} user={user} setFavorites={setFavorites} />
      <Routes>
        <Route
          path="/"
          element={<LandingPage user={user} setUser={setUser} />}
        />
        <Route path="/about" element={<About />} />
        {/* <Route path="/profile/:id" element={<ProfileView />} /> */}
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
      <Footer />
    </>
  );
};

export default App;
