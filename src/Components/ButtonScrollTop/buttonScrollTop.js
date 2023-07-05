import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./buttonScrollTop.css";

const ButtonScrollTop = ({ onClick, show }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`scroll-to-top ${show ? "active" : ""}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faArrowUp} className="arrow-icon" />
    </button>
  );
};

export default ButtonScrollTop;
