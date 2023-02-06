import React from "react";
import List from "./list";

const Experience = ({ langg }) => {
  let work1 = langg.works[0];
  let work2 = langg.works[1];

  return (
    <>
      <div className="tree">
        <div className="tree__title">
          <h2>{langg.Title}</h2>
        </div>
        <div className="tree-items">
          {langg.works.map((item) => (
            <List element={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Experience;
