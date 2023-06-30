import React, { useEffect, useState } from "react";
import axios from "axios";
import '../FetchNews/fetchNews.css'

const FetchNews = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    getNews()
  },[])
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2023-06-28&to=2023-06-28&sortBy=popularity&apiKey=7d3bb61252064a1b82860e8f5f6fa1b9"
      )
      .then((response) => {
        console.log(response)
        setData(response.data.articles);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((value, key) => (
            <div className="col-4 mb-4" key={key}>
              <div className="card news-card h-100">
                {value.urlToImage && (
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt={value.title}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description}</p>
                  <a href={value.url} className="btn btn-primary mt-auto">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FetchNews;
