import React from "react";

import styled from "styled-components";
import { theme } from "../../styles";

const { colors, fontSizes } = theme;

const StyledContainer = styled.article`
  border: 1px solid red;
  background: ${colors.white};
  border-radius: 10px;
  overflow: hidden;
`;

const StyledImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
`;

const StyledContent = styled.div`
  margin: 1.66em 1.77em;
  text-align: left;
`;

const StyledAuthor = styled.p`
  font-size: ${fontSizes.xxs};
  margin: 0;
`;

const StyledTitle = styled.h4`
  font-size: ${fontSizes.md};
  font-weight: 400;
  margin: 0.75em 0;
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.xs};
  line-height: 1.5em;
  margin: 0;
`;

const CardItems = ({ item }) => {
  const { image, description, title, author } = item;
  return (
    <StyledContainer>
      <StyledImage image={image} />
      <StyledContent>
        <StyledAuthor>{author}</StyledAuthor>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledContent>
    </StyledContainer>
  );
};

export default CardItems;
