import React from "react";
import List from "./list";
const Education = ({ langg }) => {
  let school1 = langg.school[0];
  let school2 = langg.school[1];

  return (
    <>
      <div className="tree">
        <div className="tree__title">
          <h2>{langg.Title}</h2>
        </div>
        <div className="tree-items">
          {langg.school.map((item) => (
            <List element={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Education;
