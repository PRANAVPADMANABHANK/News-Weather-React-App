import React from "react";
import "./filter.css";

const Filter = () => {
  return (
    <section className="filter-container">
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="filterDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filter by Language
        </button>
        <div className="dropdown-menu" aria-labelledby="filterDropdown">
          <a className="dropdown-item" href="#">
            Option 1
          </a>
          <a className="dropdown-item" href="#">
            Option 2
          </a>
          <a className="dropdown-item" href="#">
            Option 3
          </a>
        </div>
      </div>
    </section>
  );
};

export default Filter;
