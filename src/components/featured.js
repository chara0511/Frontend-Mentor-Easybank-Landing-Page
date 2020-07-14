import React, { useContext } from "react";

import MainContext from "./context/mainContext";
import FeaturedItems from "./sections/featuredItems";

import styled from "styled-components";
import { theme } from "../styles";

const { colors, fontSizes } = theme;

const StyledBackground = styled.div`
  background: ${colors.lightGrayishBlue};
  border: 5px black solid;
`;

const StyledContainer = styled.section`
  width: 90%;
  border: 1px solid green;
  margin: 0 auto;
  text-align: center;
`;

const StyledTitle = styled.h2`
  font-size: ${fontSizes.xxl};
  font-weight: 400;
  margin-top: 1.5em;
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.sm};
  font-weight: 400;
  line-height: 1.75em;
`;

const StyledGrid = styled.div`
  display: grid;
  row-gap: 2em;
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
