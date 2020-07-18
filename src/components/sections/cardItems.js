import React from "react";

import styled from "styled-components";
import { theme } from "../../styles";

const { colors, fontSizes } = theme;

const StyledContainer = styled.article`
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

const StyledName = styled.a`
  font-size: ${fontSizes.md};
  font-weight: 400;
  margin: 0.75em 0;
  color: ${colors.darkBlue};
`;

const StyledDescription = styled.p`
  font-size: ${fontSizes.xs};
  line-height: 1.5em;
  margin: 0;
`;

const CardItems = ({ item }) => {
  const { image, link, description, name, author } = item;
  return (
    <StyledContainer>
      <StyledImage image={image} />
      <StyledContent>
        <StyledAuthor>{author}</StyledAuthor>
        <StyledName href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </StyledName>
        <StyledDescription>{description}</StyledDescription>
      </StyledContent>
    </StyledContainer>
  );
};

export default CardItems;
