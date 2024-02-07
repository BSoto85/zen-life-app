import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createQuoteForUser, getAllQuotes, addQuoteToData } from "../api/fetch";

const QuotesForm = ({ user, setFavorites }) => {
  const [quote, setQuote] = useState({
    author: "",
    quote: "",
    authorId: user.id,
  });
  const [quotes, setQuotes] = useState([]);

  // const { id } = useParams();

  // const savedQuotes = user.savedQuotes;

  function handleOnChange(e) {
    setQuote({
      ...quote,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuoteToData()
      .then((res) => res.json())
      .then((data) => {
        setQuotes([...data, quote]);
      })
      .catch((error) => {
        console.error(error);
      });
    createQuoteForUser(quote)
      .then((res) => res.json())
      .then((data) => setFavorites([...data[0].savedQuotes, quote]));
    setQuote({
      author: "",
      quote: "",
      authorId: user.id,
    });
  };

  useEffect(() => {
    getAllQuotes()
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
