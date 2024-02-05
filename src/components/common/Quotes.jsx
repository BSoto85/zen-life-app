import React, { useState } from "react";
import "./Quotes.css";

const Quotes = ({ randomQuote, handleOnClick, starred }) => {
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
