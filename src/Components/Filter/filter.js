import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import "./filter.css";

// Import Redux
import { useDispatch } from "react-redux";
import { fetchNews } from "../../Redux/Slice/news";

const Filter = () => {
  const languageMap = {
    Arabic: "ar",
    German: "de",
    English: "en",
    Spanish: "es",
    French: "fr",
    Hebrew: "he",
    Italian: "it",
    Dutch: "nl",
    Norwegian: "no",
    Portuguese: "pt",
    Russian: "ru",
    Swedish: "sv",
    Chinese: "zh",
  };

  const language = Object.keys(languageMap);
  const [filter, setFilter] = useState("");
  const [displayDropDown, setDisplayDropdown] = useState(false);
  const dispatch = useDispatch();

  const handleDropdown = () => {
    setDisplayDropdown(!displayDropDown);
  };

  const handleLanguageSelection = (selectedLanguage) => {
    const shouldChangeLanguage = window.confirm(
      "Are you sure you want to change the language?"
    );
    if (shouldChangeLanguage) {
      setFilter(selectedLanguage);
      handleDropdown();
      const languageCode = languageMap[selectedLanguage];
      console.log(languageCode)
      dispatch(fetchNews(languageCode));
    }
  };

  return (
    <section className="filter-container">
      <div className="filter">
        <input
          type="text"
          readOnly
          placeholder="Filter by Language"
          value={filter}
          className="filter-input"
        />
        <FaAngleDown
          className={`filter-icon ${displayDropDown ? "rotate-icon" : ""}`}
          onClick={handleDropdown}
        />
      </div>

      {displayDropDown && (
        <div className="dropdown-content">
          {language.map((item, index) => (
            <div
              className="dropdown-item"
              key={index}
              onClick={() => handleLanguageSelection(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Filter;
