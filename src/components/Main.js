import React from "react";

import Hero from "./hero";
import Featured from "./featured";
import MainState from "./context/mainState";
import Cards from "./cards";
import Footer from "./footer";

const Main = () => {
  return (
    <MainState>
      <Hero />
      <Featured />
      <Cards />
      <Footer />
    </MainState>
  );
};

export default Main;
