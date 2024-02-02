import React from "react";
import About from "./components/About";
import Footer from "./components/common/Footer";
import { useState, useEffect } from "react";
const URL = import.meta.env.VITE_BASE_API_URL;

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${URL}/users`)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);
  console.log(users);

  return (
    <div>
      <About />
      <Footer />
    </div>
  );
};

export default App;
