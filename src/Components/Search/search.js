import React from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";

const Search = () => {
  return (
    <section className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search for news"
          className="search-input"
        />
        <button className="search-button" type="button">
          <FaSearch className="search-icon" />
        </button>
      </div>
    </section>
  );
};

export default Search;
