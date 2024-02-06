import React, { useState }, { useState, useEffect } from "react";
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
import "./App.css";

const App = () => {
  return <div>Basic Pursuit React Starter</div>;
};

export default App;
