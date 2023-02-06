import React from "react";
//img

import toJa from "../../IMG's/Toja.jpg";

const AboutMe = ({ langg, personalist }) => {
  return (
    <>
      <div id="About" className="about">
        <div className="about__title">
          <h2>{langg.title}</h2>
        </div>
        <div className="about__img">
          <img src={toJa} alt="test" />
        </div>
        <p className="about__describe">{langg.description}</p>

        <ul className="about__userInformation">
          <li>
            {langg.Name}: <span>{personalist.firstName}</span>
          </li>
          <li>
            {langg.Age}:{" "}
            <span>
              {personalist.Age} {langg.AgeFix}
            </span>
          </li>
          <li>
            {langg.Job}: <span>{personalist.Job}</span>
          </li>
          <li>
            {langg.CitizenShip}: <span>{langg.CitizenShipCountry}</span>
          </li>
          <li>
            {langg.Residence}: <span>{personalist.residence}</span>
          </li>
          <li>
            E-Mail: <span>{personalist.Email}</span>
          </li>
        </ul>
        <div className="about__button">
          <button>
            <span aria-hidden="true">{langg.Download} CV</span>
            {langg.Download} CV
            <span aria-hidden="true">{langg.Download} CV</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
