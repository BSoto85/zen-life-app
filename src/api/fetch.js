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

export function getOneUser(id) {
  return fetch(`${URL}/users/${id}`).then((res) => res.json());
}

export function createQuoteForUser(quote, id) {
  const options = {
    method: "POST",
    body: JSON.stringify(quote),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/users/${id}`, options);
}

export function deleteQuote(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/users/${id}`, options);
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
