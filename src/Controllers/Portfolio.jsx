import React, { useEffect, useState } from "react";
// import Typewriter from "typewriter-effect";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
  const navigate = useNavigate();
  const SearchElement = (item) => {
    return (
      <li
        key={item.sign}
        onClick={() => {
          setFilter(item.sign);
        }}
        className={`portfolio-Search__item ${
          filter == item.sign ? "portfolio-Search__item--active" : ""
        }`}
      >
        {item.title}
      </li>
    );
  };
  let tab = [];
  git.map((item) => tab.push(item));
  youtube.map((item) => tab.push(item));
  console.log(tab);
  console.log(photos);
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
        <ul className="portfolio-Search">
          {lang.search.map((item) => SearchElement(item))}
        </ul>
        <motion.div layout className="portfolioItems">
          {tab.map((item, index) => (
            <motion.div
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
              <a href={item.html_url || `https://youtu.be/${item.id}`}>
                <div
                  className="portfolioItems__image"
                  style={{
                    backgroundImage: `url(${
                      photos[index] != undefined
                        ? photos[index].download_url
                        : ""
                    } 
                        ${
                          item.snippet != undefined
                            ? item.snippet.thumbnails.standard.url
                            : ""
                        })`,
                  }}
                ></div>
                <div className="portfolioItems__content">
                  <p>
                    {item.name ? lang.search[2].title : lang.search[1].title}
                  </p>
                  <p>{item.name || item.snippet.title}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
