import React from "react";
import QuotesForm from "./QuotesForm";

const Favorites = ({ user, favorites, setFavorites }) => {
  return (
    <div>
      <QuotesForm setFavorites={setFavorites} user={user} />
      <ul>
        {favorites.length ? (
          favorites.map((quote) => (
            <li key={quote.id}>
              "{quote.quote}" -{quote.author}
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
