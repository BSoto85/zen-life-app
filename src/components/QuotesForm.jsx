import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getOneUser, createQuoteForUser } from "../api/fetch";

const QuotesForm = ({ setFavorites }) => {
  const [quote, setQuote] = useState({
    author: "",
    quote: "",
  });

  const { id } = useParams();

  // const savedQuotes = user.savedQuotes;

  function handleOnChange(e) {
    setQuote({
      ...quote,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuoteForUser(quote, id)
      .then((res) => res.json())
      .then((data) => setFavorites([...data.savedQuotes, quote]))
      .catch((error) => {
        console.error(error);
      });
    setQuote({
      author: "",
      quote: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="submit">
        <label htmlFor="quote">Add a quote:</label>
        <input
          onChange={handleOnChange}
          type="text"
          id="quote"
          name="quote"
          value={quote.quote}
        />
        <label htmlFor="author">Add author</label>
        <input
          onChange={handleOnChange}
          type="text"
          id="author"
          name="author"
          value={quote.author}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default QuotesForm;
