import React from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

//img's
import polFlag from "../IMG's/FlagsIcon/poland.png";
import engFlag from "../IMG's/FlagsIcon/united-states.png";

// import "./Navigation.scss";

const Navigation = ({
  lang,
  setLanguage,
  setloading,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const changeWebChandler = (navigateLocation) => {
    if (document.querySelector(".App--active") != null) {
      document.querySelector(".App").classList.remove("App--active");
    }
    setTimeout(() => {
      setloading(false);
      navigate(navigateLocation);
    }, 1000);
  };

  return (
    <div className="containerTop">
      <div className="flagContainer">
        <button
          className="flagContainer__button"
          onClick={() => {
            changeWebChandler();
            localStorage.setItem("language", "pl");
          }}
        >
          <img src={polFlag} alt="poland" />
        </button>
        <button
          className="flagContainer__button"
          onClick={() => {
            changeWebChandler();
            localStorage.setItem("language", "en");
          }}
        >
          <img src={engFlag} alt="english" />
        </button>
      </div>

      <nav className="navigation">
        <button className="navigation__hamburger" onClick={handleMenuToggle}>
          <FontAwesomeIcon className="icon" icon={isMenuOpen ? faX : faBars} />
        </button>
        <ul
          className={`navigation__menu ${
            isMenuOpen ? "navigation__menu--open" : ""
          }`}
        >
          <a
            className={"navigation__menu-item"}
            onClick={() => changeWebChandler("About")}
          >
            {lang.Resume}
          </a>
          <a
            className={"navigation__menu-item"}
            onClick={() => changeWebChandler("Portfolio")}
          >
            {lang.Protfolio}
          </a>
          <a
            className={"navigation__menu-item"}
            onClick={() => changeWebChandler("Contact")}
          >
            {lang.Contact}
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
