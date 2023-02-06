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

//img's
import polFlag from "./IMG's/FlagsIcon/poland.png";
import engFlag from "./IMG's/FlagsIcon/united-states.png";

//translations
import translations from "./Other/translate.json";

const Main = ({ setloading }) => {
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
          <Route path="/Portfolio" element={<p>Portfolio</p>} />
          <Route path="/Contact" element={<p>Contact</p>} />
        </Routes>
      </div>
      <Footer trans={translations} langg={lang} />
    </div>
  );
};
export default Main;
