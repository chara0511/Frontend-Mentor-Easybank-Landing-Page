import React from "react";
import styled from "styled-components";
import { theme } from "../../styles";

const { colors } = theme;

const StyledContainer = styled.li`
  text-align: center;
  margin: auto;
`;

const StyledItem = styled.a`
  color: ${colors.grayishBlue};
  padding: 1em;

  &:hover {
    color: ${colors.darkBlue};
    border-bottom: 5px solid transparent;
    border-image: linear-gradient(
        to right,
        ${colors.limeGreen} 0%,
        ${colors.brightCyan} 100%
      )
      1;
  }
`;
const NavItems = ({ item }) => {
  return (
    <StyledContainer>
      <StyledItem>{item.name}</StyledItem>
    </StyledContainer>
  );
};

export default NavItems;
