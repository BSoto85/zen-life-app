const URL = import.meta.env.VITE_BASE_API_URL;

export function getAllUsers() {
  return fetch(`${URL}/users`).then((res) => res.json());
}

export function getAllQuotes() {
  return fetch(`${URL}/quotes`).then((res) => res.json());
}

export function getAllMusic() {
  return fetch(`${URL}/music`).then((res) => res.json());
}

export function getAllFavorites() {
  return fetch(`${URL}/favorites`).then((res) => res.json());
}

// export function getOneUser(id) {
//   return fetch(`${URL}/users/${id}`).then((res) => res.json());
// }

export function addQuoteToFavorites(quote) {
  const options = {
    method: "POST",
    body: JSON.stringify(quote),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/favorites`, options).then((res) => res.json());
}

export function createNewQuote(quote) {
  const options = {
    method: "POST",
    body: JSON.stringify(quote),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/favorites`, options).then((res) => res.json());
}

export function deleteQuote(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/favorites/${id}`, options).then((res) => res.json());
}

// export function updateMovie(id, movie) {
//   const options = {
//     method: "PUT",
//     body: JSON.stringify(movie),
//     headers: { "Content-Type": "application/json" },
//   };
//   return fetch(`${URL}/movies/${id}`, options).then((response) => {
//     return response.json();
//   });
// }
