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
import DetailView from "./components/DetailView";
import Favorites from "./components/Favorites";
import ListView from "./components/ListView";
import SongList from "./components/SongList";

const URL = import.meta.env.VITE_BASE_API_URL;
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const data = [
  {
    id: "D8-hEWB",
    names: {
      firstName: "Brenda",
      lastName: "Soto",
    },
    username: "bsoto@pursuit.org",
    savedQuotes: [
      {
        id: "1",
        author: "Charles R. Swindoll",
        quote: "Life is 10% what happens to you and 90% how you react to it.",
        userIds: [],
      },
      {
        id: "2",
        author: "Norman Vincent Peale",
        quote: "Change your thoughts, and you change your world.",
        userIds: [],
      },
      {
        id: "3",
        author: "Walt Disney",
        quote:
          "All our dreams can come true if we have the courage to pursue them.",
        userIds: [],
      },
    ],
  },
];
console.log(data[0].savedQuotes);

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(data[0]);
  const [quotes, setQuotes] = useState([]);
  const [music, setMusic] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [randomQuoteId, setRandomQuoteId] = useState("");
  const [favorites, setFavorites] = useState(user.savedQuotes);
  const [starred, setStarred] = useState(false);

  const { id } = useParams();

  let star = "✩";

  const pickRandomQuote = (quotes) => {
    if (quotes.length > 0) {
      const randomizedIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(
        `"${quotes[randomizedIndex].quote}" -${quotes[randomizedIndex].author}`
      );
      setRandomQuoteId(quotes[randomizedIndex].id);
    }
  };

  const handleOnClick = () => {
    if (starred === false) {
      console.log("Clicked");
      console.log("Quotes:", randomQuoteId);
      const quoteToFavorite = quotes.find((quote) => {
        return quote.id === randomQuoteId;
      });
      star = "★";
      console.log("Favorited Quote:", quoteToFavorite);
      setFavorites([...favorites, quoteToFavorite]);
    } else {
      star = "✩";
      // removeFavorite()
    }
    setStarred(!starred);
  };

  useEffect(() => {
    fetch(`${URL}/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));

    fetch(`${URL}/quotes`)
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        pickRandomQuote(data);
      })
      .catch((error) => console.error("Error fetching quotes:", error));

    fetch(`${URL}/music`)
      .then((response) => response.json())
      .then((data) => {
        setMusic(data);
      })
      .catch((error) => console.error("Error fetching music:", error));
  }, []);

  useEffect(() => {
    if (randomQuoteId !== "") {
      const isFavorited = favorites.includes(
        (quote) => quote.id === randomQuoteId
      );
      isFavorited ? setStarred(true) : setStarred(false);
    }
  }, [randomQuoteId]);

  // useEffect(() => {
  //   // setUser(users.find((user) => user.id === id));
  //   setUser(data);
  // }, []);

  // useEffect(() => {
  //   if (user) {
  //     setFavorites(user.savedQuotes);
  //   }
  // }, []);

  return (
    <>
      <Header />
      <NavBar />
      <Quotes
        randomQuote={randomQuote}
        handleOnClick={handleOnClick}
        starred={starred}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<DetailView user={user} />} />
        <Route
          path="/favorites/:id"
          element={
            <Favorites
              user={user}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route path="/list" element={<ListView />} />
        <Route path="/songList" element={<SongList songs={music} />} />
      </Routes>
      <div>{/* <SongList songs={music} /> */}</div>
      <Footer />
    </>
  );
};

export default App;
