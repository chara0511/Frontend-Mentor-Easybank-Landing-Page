import React, { useContext } from "react";
import MainContext from "./context/mainContext";

import styled from "styled-components";
import { Button, theme } from "../styles";
import { FormattedIcons } from "./icons";

const { fontSizes } = theme;

const StyledBackground = styled.div`
  position: absolute;
  z-index: -1;
  border: 1px brown solid;
  width: 100%;
  height: 345px;

  svg {
    width: 100%;
    height: 345px;
  }
`;

const StyledContainer = styled.section`
  width: 90%;
  border: 1px solid green;
  margin: 0 auto;
  text-align: center;
`;

const StyledImage = styled.div`
  border: 1px solid blue;
  margin: 0 auto;
  margin-top: -35px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: 325px;
  height: 395px;
`;

const StyledContent = styled.div`
  padding-bottom: 3em;
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

const ButtonHero = styled(Button)`
  margin: 1em 0;
`;

const Hero = () => {
  const { data } = useContext(MainContext);
  const { hero } = data;
  const { background, image, title, description } = hero;

  return (
    <>
      <StyledBackground>
        <FormattedIcons name={background[1].mobile} />
      </StyledBackground>

      <StyledContainer>
        <StyledImage image={image} />

        <StyledContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          <ButtonHero>Request Invite</ButtonHero>
        </StyledContent>
      </StyledContainer>
    </>
  );
};

export default Hero;
