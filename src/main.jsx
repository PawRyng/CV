// liblary

import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, HashRouter } from "react-router-dom";

// style
import "./Styles/style.css";

//page's
import Home from "./Controllers/Home";
import Nav from "./Controllers/Nav";
import Footer from "./Controllers/Footer";
import Resume from "./Controllers/Resume";
import Contact from "./Controllers/Contact";
import Portfolio from "./Controllers/Portfolio";

//translations
import translations from "./Other/translate.json";

const Main = ({ setloading, git, photos, youtube }) => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(
    window.localStorage.getItem("language")
      ? window.localStorage.getItem("language")
      : "en"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //change translation
  const lang = translations[language];
  const personalist = translations.personalist;
  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector(".App--active") == null) {
        document.querySelector(".App").classList.add("App--active");
      }
    }, 50);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <Nav
        lang={lang}
        setLanguage={setLanguage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setloading={setloading}
      />
      <div className="container-main">
        <Routes>
          <Route
            path="/"
            element={<Home lang={lang} personalist={personalist} />}
          />
          <Route
            path="/About"
            element={
              <Resume
                langg={lang}
                isMenuOpen={isMenuOpen}
                personalist={personalist}
                setloading={setloading}
              />
            }
          />
          <Route
            path="/Portfolio"
            element={
              <Portfolio
                lang={lang.PortfolioContent}
                isMenuOpen={isMenuOpen}
                personalist={personalist}
                setloading={setloading}
                git={git}
                photos={photos}
                youtube={youtube}
              />
            }
          />
          <Route
            path="/Contact"
            element={
              <Contact
                lang={lang.ContactContent}
                isMenuOpen={isMenuOpen}
                personalist={personalist}
                setloading={setloading}
              />
            }
          />
        </Routes>
      </div>
      <Footer trans={translations} langg={lang} />
    </div>
  );
};
export default Main;
