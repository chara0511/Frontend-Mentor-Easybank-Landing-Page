import React from "react";

import Hero from "./hero";
import Featured from "./featured";
import MainState from "./context/mainState";
import Cards from "./cards";

const Main = () => {
  return (
    <MainState>
      <Hero />
      <Featured />
      <Cards />
    </MainState>
  );
};

export default Main;
