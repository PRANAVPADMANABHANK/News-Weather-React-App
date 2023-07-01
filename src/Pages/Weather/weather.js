import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import SearchCountry from "../../Components/SearchCountry/searchCountry";
import './weather.css'

const weather = () => {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <SearchCountry onSearchChange={handleOnSearchChange} />
      </div>
    </>
  );
};

export default weather;
