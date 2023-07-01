//Location api from geo-db rapidapi.com
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "aae490fc4amsh58bbc158e94a85fp158289jsnfb43ca8c9330",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"; //url endpoint for fetching the cities 

//Weather api from openweathermap.org
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"; //url endpoint for fetching current weather and day forecasting
export const WEATHER_API_KEY = "9bd22c3a3899a34848d9f46e4e5dd6fe";
