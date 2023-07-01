import React from "react";
import Home from "./Pages/Home/home";
import Weather from "./Pages/Weather/weather";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/weather" element={<Weather/>} />
      </Routes>
    </Router>
  );
}

export default App;
