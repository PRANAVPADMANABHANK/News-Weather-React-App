import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import SearchCountry from "../../Components/SearchCountry/searchCountry";
import CurrentWeather from "../../Components/CurrentWeather/currentWeather";
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
        <CurrentWeather/>
      </div>
    </>
  );
};

export default weather;
