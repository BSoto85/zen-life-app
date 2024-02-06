import React, { useState, useEffect } from "react";
import "./Quotes.css";
import { getAllQuotes } from "../../api/fetch";

const Quotes = ({ user, favorites, setFavorites }) => {
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
    //This should be a patch to update the savedQuotes array
    if (starred === false) {
      const quoteToFavorite = quotes.find((quote) => {
        return quote.id === randomQuoteId;
      });
      setFavorites([...favorites, quoteToFavorite]);
    } else {
      // removeFavorite()
    }
    setStarred(!starred);
  };

  useEffect(() => {
    if (randomQuoteId !== "") {
      const isFavorited = favorites.includes(
        (quote) => quote.id === randomQuoteId
      );
      isFavorited ? setStarred(true) : setStarred(false);
    }
  }, [randomQuoteId]);

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
    <div>
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
