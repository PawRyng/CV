import React, { useEffect, useState } from "react";

import Typewriter, { Typ } from "typewriter-effect";

export default function loading({ setloading }) {
  const wrapperClass = "loadingWrapper";
  return (
    <>
      <Typewriter
        options={{
          delay: 50,
          wrapperClassName: wrapperClass,
          skipAddStyles: true,
          cursor: "",
        }}
        onInit={(typewritter) => {
          typewritter
            .typeString("loading...")
            .callFunction(() => {
              document.querySelector(`.${wrapperClass}`).style = "opacity:0;";
              setTimeout(() => {
                setloading(true);
              }, 500);
            })
            .start();
        }}
      />
    </>
  );
}
