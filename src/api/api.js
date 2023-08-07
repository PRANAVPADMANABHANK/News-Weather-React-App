//Location api from geo-db rapidapi.com
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_GEO_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"; //url endpoint for fetching the cities 

//Weather api and key from openweathermap.org
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"; //url endpoint for fetching current weather and day forecasting
export const WEATHER_API_KEY = "9bd22c3a3899a34848d9f46e4e5dd6fe"

//News api key from newsapi.org
export const NEWS_API_KEY = "7d3bb61252064a1b82860e8f5f6fa1b9";
