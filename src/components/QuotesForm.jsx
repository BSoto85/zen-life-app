import React, { useEffect, useState } from "react";
import { getAllFavorites, createNewQuote } from "../api/fetch";
import { Form, Button } from "react-bootstrap";
import "../index.css";

const QuotesForm = ({ favorites, setFavorites }) => {
  const [quote, setQuote] = useState({
    author: "",
    quote: "",
  });

  function handleOnChange(e) {
    setQuote({
      ...quote,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewQuote(quote).then((data) => {
      console.log("-------------", favorites);
      favorites.length === 0
        ? setFavorites([data])
        : setFavorites([...favorites, data]);
    });
    setQuote({
      author: "",
      quote: "",
    });
  };

  useEffect(() => {
    getAllFavorites()
      .then((data) => {
        setFavorites(data);
      })
      .catch((error) => {
        console.error("Failed to fetch Favorites", error);
      });
  }, []);

  useEffect(() => {}, [favorites]);

  return (
    <div className="container mt-5">
      <div className="form-container p-4 quotes-form-container">
        {" "}
        {/* Use quotes-form-container class for distinctive styling */}
        <h2 className="form-title quotes-form-title">Add a New Quote</h2>{" "}
        {/* Use quotes-form-title class for distinctive styling */}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="quote">
            <Form.Label className="distinctive-text quotes-label">
              Quote:
            </Form.Label>{" "}
            {/* Use quotes-label class for distinctive styling */}
            <Form.Control
              type="text"
              placeholder="Enter quote"
              value={quote.quote}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group controlId="author">
            <Form.Label className="distinctive-text quotes-label">
              Author:
            </Form.Label>{" "}
            <Form.Control
              type="text"
              placeholder="Enter author"
              value={quote.author}
              onChange={handleOnChange}
            />
          </Form.Group>
          <button type="submit" className="quotes-button">
            {" "}
            Add Quote
          </button>
        </Form>
      </div>
    </div>
  );
};

export default QuotesForm;
