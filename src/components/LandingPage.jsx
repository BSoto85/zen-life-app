import React, { useState, useEffect } from "react";
import { getAllUsers } from "../api/fetch";

const LandingPage = ({ user, setUser }) => {
  return (
    <div>
      <h1>Welcome, {user.names.firstName}</h1>
    </div>
  );
};

export default LandingPage;
