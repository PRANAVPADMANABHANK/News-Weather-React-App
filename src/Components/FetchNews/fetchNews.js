import React, { useEffect, useState } from "react";
import { fetchNews } from "../../Redux/Slice/news";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import useBeforeUnload from "../CustomHook/useBeforeUnload";
import "../FetchNews/fetchNews.css";
import { useDispatch, useSelector } from "react-redux";

const FetchNews = () => {
  let page = 1;

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  //custom hook for page refresh warning.
  useBeforeUnload("Are you sure you want to leave this page?");

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      dispatch(fetchNews({ languageCode: "", page }));
      page++;
    }
  };

  useEffect(() => {
    dispatch(fetchNews({ selectedLanguage: "", page }));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let sortedArticles = state.news.data?.articles
    ? [...state.news.data.articles].sort((a, b) => {
        const dateA = new Date(a.publishedAt);
        const dateB = new Date(b.publishedAt);
        return dateB - dateA;
      })
    : [];

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {(sortedArticles || []).map((article, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card news-card h-100"
                onClick={() => handleCardClick(article.url)}
              >
                {article.urlToImage ? (
                  <img
                    src={article.urlToImage}
                    className="card-img-top"
                    alt={article.title}
                  />
                ) : (
                  <div className="no-image-container">
                    <p className="no-image-text">No Image Found</p>
                  </div>
                )}
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-source">Source: {article.source.name}</p>
                  <p className="card-author">By {article.author}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Published:{" "}
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </small>
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
