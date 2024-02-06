import React, { useState, useEffect } from "react";
import { getAllUsers } from "../api/fetch";

const LandingPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div></div>;
};

export default LandingPage;
