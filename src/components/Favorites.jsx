import React, { useEffect } from "react";
import QuotesForm from "./QuotesForm";
import { deleteQuote, getAllFavorites } from "../api/fetch";
import "./Favorites.css";

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
    <div className="favorites-container">
      <QuotesForm
        user={user}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      <ul className="favorites-ul">
        {favorites.length ? (
          favorites.map((quote) => (
            <li className="favorites-li" key={quote.id}>
              "{quote.quote}" -{quote.author}{" "}
              <button
                className="favorites-button"
                onClick={() => handleDelete(quote.id)}
              >
                Remove
              </button>
              <hr />
            </li>
          ))
        ) : (
          <p className="favorites-p">No quotes favorited</p>
        )}
      </ul>
    </div>
  );
};

export default Favorites;
// export { handleDelete };
