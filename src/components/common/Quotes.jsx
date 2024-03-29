import React, { useState, useEffect } from "react";
import "./Quotes.css";
import {
  addQuoteToFavorites,
  deleteQuote,
  getAllQuotes,
  getAllFavorites,
} from "../../api/fetch";

const Quotes = ({ favorites, setFavorites }) => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [randomQuoteId, setRandomQuoteId] = useState("");
  const [starred, setStarred] = useState(false);

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
      const quoteToFavorite = quotes.find((quote) => {
        return quote.id === randomQuoteId;
      });
      addQuoteToFavorites(quoteToFavorite).then((data) => {
        favorites.length === 0
          ? setFavorites([quoteToFavorite])
          : setFavorites([...favorites, quoteToFavorite]);
      });
    } else {
      deleteQuote(randomQuoteId)
        .then(
          getAllFavorites().then((data) => {
            setFavorites(data);
          })
        )
        .catch((error) => {
          console.error(error);
        });
    }
    setStarred(!starred);
  };

  useEffect(() => {
    if (randomQuoteId !== "") {
      const isFavorited = favorites.filter(
        (quote) => quote.id === randomQuoteId
      );
      isFavorited.length > 0 ? setStarred(true) : setStarred(false);
    }
  }, [randomQuoteId]);

  useEffect(() => {}, [favorites]);

  useEffect(() => {
    getAllQuotes()
      .then((data) => {
        setQuotes(data);
        pickRandomQuote(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="quote-container">
      <p className="quote-p">
        {randomQuote}
        <span onClick={handleOnClick} className="quote-button">
          {starred ? "★" : "✩"}
        </span>
      </p>
    </div>
  );
};

export default Quotes;
