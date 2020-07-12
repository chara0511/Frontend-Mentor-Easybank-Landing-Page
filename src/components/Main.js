import React from "react";
import styled from "styled-components";

import Hero from "./hero";
import media from "../styles/media";

const Container = styled.main`
  max-width: 375px;
  margin: 0 auto;
  border: 1px solid red;
  ${media.smPhone`max-width:375px`};
`;

const Main = () => {
  return (
    <Container>
      <Hero />
    </Container>
  );
};

export default Main;
