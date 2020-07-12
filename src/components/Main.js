import React from "react";
import styled from "styled-components";

import Hero from "./Hero";

const Container = styled.main`
  max-width: 375px;
  margin: 0 auto;
  border: 1px solid red;
`;

const Main = () => {
  return (
    <Container>
      <Hero />
    </Container>
  );
};

export default Main;
