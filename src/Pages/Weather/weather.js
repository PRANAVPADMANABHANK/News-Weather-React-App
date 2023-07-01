import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import SearchCountry from "../../Components/SearchCountry/searchCountry";

const weather = () => {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  
  return (
    <>
      <Navbar />
      <SearchCountry onSearchChange={handleOnSearchChange}/>
    </>
  );
};

export default weather;
