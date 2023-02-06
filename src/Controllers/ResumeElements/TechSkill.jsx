import React from "react";

import Elements from "../../Other/translate.json";

const TechSkill = ({ lang }) => {
  const Skills = Elements.TechSkill;
  console.log(Skills);
  const size = 60;
  const OneCard = (item) => {
    return (
      <div className="TechSkill-item">
        <svg>
          <circle cx={size} cy={size} r={size}></circle>
          {item.Title}
          <circle
            cx={size}
            cy={size}
            r={size}
            style={{ "stroke-dashoffset": 470 - (440 * item.Level) / 100 }}
          ></circle>
        </svg>
        <div className="TechSkill-item__title">
          <p>
            {item.Level}
            <span>%</span>
          </p>
          <p>{item.Title}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="TechSkill">
      <div className="TechSkill__title">
        <h2>{lang.TechSkill}</h2>
      </div>
      <div className="TechSkill-container">
        {Skills.map((item) => OneCard(item))}
      </div>
    </div>
  );
};
export default TechSkill;
