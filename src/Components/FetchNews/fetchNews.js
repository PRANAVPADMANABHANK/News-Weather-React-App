import React, { useState } from "react";
import axios from "axios";

const FetchNews = () => {
  const [data, setData] = useState([]);

  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=7d3bb61252064a1b82860e8f5f6fa1b9"
      )
      .then((response) => {
        setData(response.data.articles);
      });
  };

  return (
    <>
      <div className="container">
        <button className="btn btn-success" onClick={getNews}>
          Fetch News
        </button>
      </div>

      <div className="container">
        <div className="row">
          {data.map((value, key) => {
            return (
              <div className="col-3" key={key}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href="#" className="btn btn-primary">
                      Main News
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchNews;

