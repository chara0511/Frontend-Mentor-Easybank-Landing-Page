import React, { useContext } from "react";

import MainContext from "./context/mainContext";
import FeaturedItems from "./sections/featuredItems";

import styled from "styled-components";
import { theme, media } from "../styles";

const { colors, fontSizes } = theme;

const StyledBackground = styled.div`
  background: ${colors.lightGrayishBlue};
`;

const StyledContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 3em;

  ${media.mdDesktop`
    width: 85%;
    text-align: left;
  `};

  ${media.lgDesktop`
    width: 80%;
  `};
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.xxl};
  font-weight: 400;
  margin: 0;
  padding-top: 1.5em;
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.sm};
  font-weight: 400;
  line-height: 1.75em;
  padding-bottom: 3em;

  ${media.mdDesktop`
    width: 45%;
  `}
`;

const StyledGrid = styled.div`
  display: grid;
  row-gap: 1em;

  ${media.mdTablet`
    grid-template-columns:1fr 1fr;
    column-gap: 1em;
  `};

  ${media.smDesktop`
    grid-template-columns:1fr 1fr 1fr;
    column-gap: 1em;
  `};

  ${media.mdDesktop`
    grid-template-columns:1fr 1fr 1fr 1fr;
    column-gap: 1em;
  `};
`;

const Featured = () => {
  const { data } = useContext(MainContext);
  const { featured } = data;

  const { title, description, items } = featured;
  return (
    <StyledBackground>
      <StyledContainer>
        <StyledTitle>{title}</StyledTitle>

        <StyledDescription>{description}</StyledDescription>

        <StyledGrid>
          {items.map((items, index) => (
            <FeaturedItems key={index} items={items} />
          ))}
        </StyledGrid>
      </StyledContainer>
    </StyledBackground>
  );
};

export default Featured;
