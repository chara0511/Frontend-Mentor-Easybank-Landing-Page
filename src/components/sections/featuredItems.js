import React from "react";

import styled from "styled-components";
import { theme, media } from "../../styles";
import { FormattedIcons } from "../icons";

const { fontSizes } = theme;

const StyledContainer = styled.article`
  border: 1px solid blue;
`;

const StyledIcon = styled.div`
  border: 1px solid red;
  width: 75px;
  margin: 0 auto;
  height: 75px;

  ${media.mdDesktop`
  margin: 0;
  `};
`;

const StyledName = styled.h3`
  font-size: ${fontSizes.xl};
  font-weight: 400;
`;

const StyledItemsDescription = styled.p`
  font-size: ${fontSizes.sm};
  font-weight: 400;
  line-height: 1.75em;
`;

const FeaturedItems = ({ items }) => {
  const { name, description, icon } = items;

  return (
    <StyledContainer>
      <StyledIcon>
        <FormattedIcons name={icon} />
      </StyledIcon>

      <StyledName>{name}</StyledName>
      <StyledItemsDescription>{description}</StyledItemsDescription>
    </StyledContainer>
  );
};

export default FeaturedItems;
