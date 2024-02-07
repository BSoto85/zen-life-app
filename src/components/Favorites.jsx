import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import QuotesForm from "./QuotesForm";
import { deleteQuote, getAllFavorites } from "../api/fetch";

const Favorites = ({ user, favorites, setFavorites }) => {
  function handleDelete(id) {
    deleteQuote(id)
      .then(
        getAllFavorites().then((data) => {
          setFavorites(data);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {}, [favorites]);

  useEffect(() => {
    if (favorites.length === 0) {
      getAllFavorites().then((data) => setFavorites(data));
    }
  }, []);

  return (
    <div>
      <QuotesForm
        user={user}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      <ul>
        {favorites.length ? (
          favorites.map((quote) => (
            <li key={quote.id}>
              "{quote.quote}" -{quote.author}{" "}
              <button onClick={() => handleDelete(quote.id)}>Remove</button>
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
// export { handleDelete };
