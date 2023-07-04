import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import FetchNews from "../../Components/FetchNews/fetchNews";
import Search from "../../Components/Search/search";
import Filter from "../../Components/Filter/filter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Search />
      <Filter />
      <FetchNews />
    </>
  );
};

export default Home;
