import React from "react";
import Home from "./Home";
import DashboardPage from "./DashboardPage";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboardPage">DashboardPage</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
