import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Link, useLocation, redirect } from "react-router-dom";

//svg

import { ReactComponent as Mause } from "../IMG's/FontAwesomeIcons/Mause.svg";
const Header = ({ lang, mause = false, isMenuOpen, setloading, smoooth }) => {
  let location = useLocation();
  console.log(location);
  const [mauseVisable, setMauseVisable] = useState(mause);
  const [flag, setFlag] = useState(false);

  const handler = () => {
    const element = document.getElementById(smoooth);
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const mauseVisableHandler = (e) => {
    if (window.scrollY == 0) {
      setMauseVisable(true);
    } else {
      setMauseVisable(false);
    }
  };

  window.addEventListener("scroll", mauseVisableHandler);
  const mauseContainer = () => {
    return (
      <div
        className={`mauseContainer ${
          isMenuOpen ? "mauseContainer--open " : ""
        }${mauseVisable ? "" : "mauseContainer--open"}`}
      >
        <span onClick={handler}>
          <Mause />
        </span>
      </div>
    );
  };

  const linksUnder = () => {
    return (
      <Link
        className="buttonsNavigation__item"
        onClick={() => changeWebChandler(location)}
      >
        <Typewriter
          options={{
            delay: 50,
            loop: false,
            autoStart: true,
            cursor: "",
          }}
          onInit={(typewritter) => {
            typewritter.typeString(location.slice(1)).start();
          }}
        />
      </Link>
    );
  };

  const changeWebChandler = (path) => {
    if (document.querySelector(".App--active") != null) {
      document.querySelector(".App").classList.remove("App--active");
    }
    setTimeout(() => {
      redirect(path);
      setloading(false);
    }, 1000);
  };
  return (
    <>
      <h1 className="glitch">
        <span aria-hidden="true">{lang.title}</span>
        {lang.title}
        <span aria-hidden="true">{lang.title}</span>
      </h1>
      <div className="buttonsNavigation">
        <Link
          className="buttonsNavigation__item"
          onClick={() => changeWebChandler("/")}
        >
          <Typewriter
            options={{
              delay: 50,
              loop: false,
              autoStart: true,
              cursor: "",
            }}
            onInit={(typewritter) => {
              typewritter
                .typeString("Home")
                .callFunction(() => setFlag(true))
                .start();
            }}
          />
        </Link>
        /{flag && linksUnder()}
      </div>
      {mauseContainer()}
    </>
  );
};

export default Header;
