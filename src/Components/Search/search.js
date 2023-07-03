import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";
import { searchNewsByTerm } from "../../Redux/Slice/news";
import { useDispatch } from "react-redux";

const Search = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(searchNewsByTerm(term));
  };

  return (
    <section className="search-container">
      <div className="search-wrapper">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search for news"
            className="search-input"
            onChange={(event) => setTerm(event.target.value)}
          />
          <button className="search-button" type="submit">
            <FaSearch className="search-icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
