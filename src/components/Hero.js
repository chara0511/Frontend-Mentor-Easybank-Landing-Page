import React from "react";

import styled from "styled-components";

const Wrapper = styled.section`
  width: 325px;
  height: 345px;
  border: 1px solid green;
  margin: 0 auto;

  & .mockups {
    width: 325px;
    margin-top: -35px;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <img className="mockups" src="./images/image-mockups.png" alt="" />
    </Wrapper>
  );
};

export default Hero;
