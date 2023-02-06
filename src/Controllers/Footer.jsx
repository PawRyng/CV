import React, { useEffect, useState } from "react";
//svg

import { ReactComponent as Insta } from "../IMG's/FontAwesomeIcons/instagram.svg";
import { ReactComponent as Git } from "../IMG's/FontAwesomeIcons/github.svg";
import { ReactComponent as Linkedin } from "../IMG's/FontAwesomeIcons/linkedin.svg";

// import trans from "../Other/translate.json";

const Footer = ({ trans, langg }) => {
  return (
    <>
      <footer className="footer">
        <p className="footer__coppy">© 2023 Paweł_CV. {langg.footer}</p>
        <div className="footer__container">
          <Git
            className="footer__item"
            onClick={() => (window.location = trans.Links.Git)}
          />

          <Linkedin
            className="footer__item"
            onClick={() => (window.location = trans.Links.Linkedin)}
          />
          <Insta
            className="footer__item"
            onClick={() => (window.location = trans.Links.Instagram)}
          />
        </div>
      </footer>
    </>
  );
};
export default Footer;
