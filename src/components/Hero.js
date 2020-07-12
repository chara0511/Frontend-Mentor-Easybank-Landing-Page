import React from "react";

import styled from "styled-components";
import { Button, theme } from "../styles";

const { fontSizes } = theme;

const ImageBg = styled.div`
  background: url("./images/bg-intro-mobile.svg");
  background-size: cover;
  position: absolute;
  width: 375px;
  height: 345px;
  z-index: -1;
`;

const StyledContainer = styled.section`
  width: 325px;
  border: 1px solid green;
  margin: 0 auto;
  text-align: center;

  & .mockups {
    border: 1px solid blue;
    width: 325px;
    margin-top: -35px;
  }
`;

const StyledTitle = styled.h1`
  font-size: ${fontSizes.xxxl};
  font-weight: 400;
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.sm};
  font-weight: 400;
  line-height: 1.75em;
`;

const Hero = () => {
  return (
    <>
      <ImageBg />
      <StyledContainer>
        <img className="mockups" src="./images/image-mockups.png" alt="" />

        <StyledTitle>Next generation digital banking</StyledTitle>

        <StyledDescription>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </StyledDescription>

        <Button>Request Invite</Button>
      </StyledContainer>
    </>
  );
};

export default Hero;
