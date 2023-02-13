import React, { useEffect, useState } from "react";
// import Typewriter from "typewriter-effect";
import Header from "./Header";

export default function Portfolio({
  lang,
  personalist,
  isMenuOpen,
  setloading,
  git,
  photos,
  youtube,
}) {
  const [filter, setFilter] = useState("All");

  const SearchElement = (item) => {
    return (
      <li
        key={item.sign}
        onClick={() => {
          setFilter(item.sign);
        }}
      >
        {item.title}
      </li>
    );
  };
  let tab = [];
  git.map((item) => tab.push(item));
  youtube.map((item) => tab.push(item));

  return (
    <>
      <Header
        lang={lang}
        mause={true}
        isMenuOpen={isMenuOpen}
        setloading={setloading}
        smoooth="portfolio"
      />
      <div className="portfolio" id="portfolio">
        <div className="portfolio__title">
          <h2>{lang.title}</h2>
        </div>
        <div className="portfolio-Search">
          {lang.search.map((item) => SearchElement(item))}
        </div>
        <div className="portfolioItems">
          <ul>
            {tab.map((item, index) => (
              <li
                key={index}
                className={`portfolioItems__item ${
                  (filter == "All" || filter == "Pages") && item.name
                    ? "portfolioItems__item--active"
                    : ""
                } ${
                  (filter == "All" || filter == "Music") && item.snippet
                    ? "portfolioItems__item--active"
                    : ""
                }`}
              >
                {item.name || item.snippet.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
