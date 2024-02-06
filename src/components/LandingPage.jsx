import React, { useState } from "react";

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
