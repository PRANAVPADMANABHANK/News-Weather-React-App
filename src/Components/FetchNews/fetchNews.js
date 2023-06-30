import React, { useEffect } from "react";
import { fetchNews } from "../../Redux/Slice/news";
import "../FetchNews/fetchNews.css";
import { useDispatch, useSelector } from "react-redux";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

const FetchNews = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  // Beatloader component from react-spinners library to show animation
  if (state.news.isLoading) {
    const override = css`
      display: block;
      margin: 0 auto;
      margin-top: 20px;
    `;

    return (
      <div className="loading-container">
        <BeatLoader color="#ffffff" loading={true} css={override} size={15} />
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {state.news.data?.articles &&
            state.news.data.articles.map((article, index) => (
              <div className="col-4 mb-4" key={index}>
                <div className="card news-card h-100">
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      className="card-img-top"
                      alt={article.title}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <a href={article.url} className="btn btn-primary mt-auto">
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
