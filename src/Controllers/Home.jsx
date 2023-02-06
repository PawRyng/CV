import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function Home({ lang, personalist }) {
  return (
    <>
      <h1 className="glitch">
        <span aria-hidden="true">
          {lang.title} {personalist.firstName}
        </span>
        {lang.title} {personalist.firstName}
        <span aria-hidden="true">
          {lang.title} {personalist.firstName}
        </span>
      </h1>
      <Typewriter
        options={{
          delay: 50,
          // skipAddStyles: true,
          loop: true,
          autoStart: true,
          // skipAddStyles: true,
          // wrapperClassName: "underGlithTapper",
        }}
        onInit={(typewritter) => {
          typewritter
            .typeString(personalist.Job)
            .pauseFor(2000)
            .deleteAll()
            .pauseFor(500)
            .start();
        }}
        className={"underGlithTapper"}
      />
    </>
  );
}
