import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProfileView = () => {
  const [user, setUser] = useState({});

  const { names, username, savedQuotes } = user;
  const { firstName, lastName } = names;

  const { id } = useParams();

  useEffect(() => {
    getOneUser(id)
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {username}</p>
      <p>Favorited Quotes: {savedQuotes.length}</p>
    </div>
  );
};

export default ProfileView;
