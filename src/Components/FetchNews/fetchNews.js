import React, { useEffect } from "react";
import { fetchNews } from "../../Redux/Slice/news";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import "../FetchNews/fetchNews.css";
import useUnsavedChangesWarnings from "../../CustomHook/useUnsavedChangesWarnings";

// from redux
import { useDispatch, useSelector } from "react-redux";

const FetchNews = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { setDirty, setClean } = useUnsavedChangesWarnings(
    "Are you sure you want to leave this page?"
  );

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = (event) => {
    if (setDirty && setDirty instanceof Function) {
      setDirty();
    }
    event.preventDefault();
    event.returnValue = ""; // This is required for Chrome
  };

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

  const handleCardClick = (url) => {
    window.open(url, "_blank"); // Open link in a new tab
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {sortedArticles.map((article, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card news-card h-100"
                onClick={() => handleCardClick(article.url)}
              >
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
