import React, { useState } from "react";
import "./App.css";
import Header from "./components/common/Header";
import NavbarComponent from "./components/common/Navbar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default App;
