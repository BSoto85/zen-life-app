import React, { useState } from "react";

const QuotesForm = ({ user, setFavorites }) => {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  const favoritedQuotes = () => {
    const newQuote = {
      author: author,
      quote: quote,
    };
    setFavorites(...user.savedQuotes, newQuote);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    favoritedQuotes();
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} action="submit">
        <label htmlFor="quote">Add a quote:</label>
        <input
          onChange={(e) => setQuote(e.target.value)}
          type="text"
          id="quote"
          name="quote"
          value={quote}
        />
        <label htmlFor="author">Add author</label>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          id="author"
          name="author"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default QuotesForm;
