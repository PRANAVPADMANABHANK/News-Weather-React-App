import React, { useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import SearchCountry from "../../Components/SearchCountry/searchCountry";
import CurrentWeather from "../../Components/CurrentWeather/currentWeather";
import "./weather.css";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../api/api";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const foreCastFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, foreCastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(currentWeather, "//////");
  console.log(forecast, "????????");

  return (
    <>
      <Navbar />
      <div className="container">
        <SearchCountry onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>
    </>
  );
};

export default Weather;
