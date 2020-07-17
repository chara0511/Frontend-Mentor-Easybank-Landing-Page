import React from "react";
import { Nav, Hero, Featured, Cards, Footer, MainState } from ".";

const Main = () => {
  return (
    <MainState>
      <Nav />
      <Hero />
      <Featured />
      <Cards />
      <Footer />
    </MainState>
  );
};

export default Main;
