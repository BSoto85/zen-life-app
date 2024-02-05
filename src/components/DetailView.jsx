import React from "react";

const DetailView = ({ user }) => {
  const { names, username, savedQuotes } = user;
  const { firstName, lastName } = names;

  return (
    <div>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {username}</p>
      <p>Favorited Quotes: </p>
    </div>
  );
};

export default DetailView;
