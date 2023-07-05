import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">
        <Link to="/" className="navbar__link">
          NewsHub
        </Link>
      </div>
      <div className="navbar__item">
        <Link to="/weather" className="navbar__link">
          Weather Info
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
