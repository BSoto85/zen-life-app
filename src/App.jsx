import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"
import Header  from "./components/common/Header";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import Quotes from "./components/common/Quotes";
import About from "./components/About";
import Aside from "./components/Aside";
import BackgroundList from "./components/BackgroundList";
import DetailView from "./components/DetailView";
import Favorites from "./components/Favorites";
import ListView from "./components/ListView";
import SongList from "./components/SongList";

const URL = import.meta.env.VITE_BASE_API_URL;
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";





const App = () => {

  const [ users, setUsers ] = useState([]);
  const [ quotes, setQuotes] = useState([]);
  const [ music, setMusic] = useState([]);

  useEffect(() => {
    fetch(`${URL}/users`)
    .then((response) => response.json())
    .then((data) => {
      setUsers(data)
      
    })
     .catch((error) => console.error("Error fetching users:", error));

fetch(`${URL}/quotes`)
    .then((response) => response.json())
    .then((data) => {
      setQuotes(data)
      
    })
     .catch((error) => console.error("Error fetching quotes:", error));

     fetch(`${URL}/music`)
    .then((response) => response.json())
    .then((data) => {
      setMusic(data)
      
    })
     .catch((error) => console.error("Error fetching music:", error));

  }, []);
// console.log(users);
//   console.log(quotes);
//   console.log(music);
  return (
    <>
       <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<DetailView />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/list" element={<ListView />} />
        <Route path="/songList" element={<SongList songs={music} />} />
      </Routes>
       <div>
        <SongList songs={music} />
       </div>
      <Footer /> 
    </>
  )
}


export default App;
