import React, { useEffect } from "react";
import { fetchNews } from "../../Redux/Slice/news";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import "../FetchNews/fetchNews.css";

// from redux
import { useDispatch, useSelector } from "react-redux";

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

  // Create a new array with sorted articles based on the latest date published first
  const sortedArticles = state.news.data?.articles
    ? [...state.news.data.articles].sort((a, b) => {
        const dateA = new Date(a.publishedAt);
        const dateB = new Date(b.publishedAt);
        return dateB - dateA;
      })
    : [];

  return (
    <>
      <div className="container">
        <div className="row">
          {sortedArticles.map((article, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card news-card h-100">
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    className="card-img-top"
                    alt={article.title}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-source">Source: {article.source.name}</p>
                  <p className="card-author">By {article.author}</p>
                  <p className="card-date">
                    Published: {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="card-description">{article.description}</p>
                </div>
                <div className="card-footer">
                  <a href={article.url} className="btn btn-primary">
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
