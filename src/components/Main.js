import React from "react";

import Hero from "./hero";
import Featured from "./featured";
import MainState from "./context/mainState";

const Main = () => {
  return (
    <MainState>
      <Hero />
      <Featured />
    </MainState>
  );
};

export default Main;
