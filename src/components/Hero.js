import React, { useContext } from "react";
import MainContext from "./context/mainContext";

import styled from "styled-components";
import { Button, theme, media } from "../styles";
import { FormattedIcons } from "./icons";

const { fontSizes } = theme;

const StyledContainer = styled.div`
  border: 4px solid blue;

  ${media.mdDesktop`
 display: flex;
 flex-direction: row-reverse;`}
`;

const StyledBackground = styled.div`
  position: relative;
  width: 100%;
  height: 19em;

  ${media.mdDesktop`
      height: 40em;

      & .overflow-hidden{
        overflow: hidden;
      }
    `};

  & .bgIntroDesktopDisplay {
    width: 100%;
    height: 345px;
    display: none;

    ${media.lgTablet`
      display: block;
    `};

    ${media.mdDesktop`
      height: max-content;
      margin-top: -11em;
      position: absolute;
      z-index: -1;
    `};
  }

  & .bgIntroMobileDisplay {
    width: 100%;
    height: 345px;

    ${media.lgTablet`
      display: none;
    `};
  }
`;

const StyledContent = styled.section`
  width: 90%;
  border: 2px solid green;
  margin: 0 auto;
  text-align: center;

  ${media.mdDesktop`
    width: 30em;
    margin: auto;
    margin-left: 8%;
    text-align: left;
  `};

  ${media.lgDesktop`
    width: 34em;
    margin-left: 10%;
    margin-right: 5%;
  `};
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  ${media.mdDesktop`
    width: 675px;
    height: 850px;
    margin-right: -5em;
    position: relative;

  `};

  ${media.lgDesktop`
    width: 750px;
    height: 850px;
    margin-right: -6em;
  `};
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
    <StyledContainer>
      <StyledBackground>
        <FormattedIcons name={background[0].desktop} />

        <FormattedIcons name={background[1].mobile} />

        <div className="overflow-hidden">
          <StyledImage image={image} />
        </div>
      </StyledBackground>

      <StyledContent>
        <StyledTitle>{title}</StyledTitle>

        <StyledDescription>{description}</StyledDescription>

        <ButtonHero>Request Invite</ButtonHero>
      </StyledContent>
    </StyledContainer>
  );
};

export default Hero;
