import React, { useContext } from "react";

import CardItems from "./sections/cardItems";

import styled from "styled-components";
import { theme, media } from "../styles";
import MainContext from "./context/mainContext";

const { colors, fontSizes } = theme;

const StyledBackground = styled.div`
  background: ${colors.veryLightGray};
  padding-top: 1.5em;
`;

const StyledContainer = styled.article`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 3em;

  ${media.mdDesktop`
    text-align: left;
    width: 85%;
  `};

  ${media.lgDesktop`
    width: 80%;
  `};
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.xxl};
  font-weight: 400;
  margin-top: 1.5em;
`;

const StyledGrid = styled.section`
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

const Cards = () => {
  const { data } = useContext(MainContext);
  const { cards } = data;
  const { title, items } = cards;

  return (
    <StyledBackground>
      <StyledContainer>
        <StyledTitle>{title}</StyledTitle>

        <StyledGrid>
          {items.map((item, index) => (
            <CardItems key={index} item={item} />
          ))}
        </StyledGrid>
      </StyledContainer>
    </StyledBackground>
  );
};

export default Cards;
