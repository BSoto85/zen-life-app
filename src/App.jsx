import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import Quotes from "./components/common/Quotes";
import About from "./components/About";
import Aside from "./components/Aside";
import BackgroundList from "./components/BackgroundList";
import ProfileView from "./components/ProfileView";
import Favorites from "./components/Favorites";
import ListView from "./components/ListView";
import SongList from "./components/SongList";

const URL = import.meta.env.VITE_BASE_API_URL;
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const { id } = useParams();

  return (
    <>
      <Header />
      <NavBar />
      <Quotes favorites={favorites} setFavorites={setFavorites} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:id" element={<ProfileView />} />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route path="/list" element={<ListView />} />
        <Route path="/songList" element={<SongList />} />
      </Routes>
      <div>{/* <SongList songs={music} /> */}</div>
      <Footer />
    </>
  );
};

export default App;
