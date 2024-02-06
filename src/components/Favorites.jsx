import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import QuotesForm from "./QuotesForm";

const Favorites = ({ favorites, setFavorites }) => {
  const { id } = useParams();

  // function handleDelete() {
  //   deleteQuote(id)
  //     .then(() => setFavorites())
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  return (
    <div>
      <QuotesForm setFavorites={setFavorites} />
      <ul>
        {favorites.length ? (
          favorites.map((quote) => (
            <li key={quote.id}>
              "{quote.quote}" -{quote.author}{" "}
              <button onClick={handleDelete}>Remove</button>
            </li>
          ))
        ) : (
          <p>No quotes favorited</p>
        )}
      </ul>
    </div>
  );
};

export default Favorites;
