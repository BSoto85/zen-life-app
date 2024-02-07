import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { createQuoteForUser } from "../api/fetch";
import { Form, Button } from "react-bootstrap";

import "../index.css";

const QuotesForm = ({ user, setFavorites }) => {
  const [quote, setQuote] = useState({
    author: "",
    quote: "",
    authorId: user.id,
  });

  const { id } = useParams();

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
      authorId: user.id,
    });
  };

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
          <Button variant="primary" type="submit" className="quotes-button">
            {" "}
            Add Quote
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default QuotesForm;
