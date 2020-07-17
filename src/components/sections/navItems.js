import React from "react";
import styled from "styled-components";

const StyledContainer = styled.li`
  border: 1px red;
  text-align: center;
  margin: 1.5em auto;
`;

const StyledItem = styled.a``;
const NavItems = ({ item }) => {
  return (
    <StyledContainer>
      <StyledItem>{item.name}</StyledItem>
    </StyledContainer>
  );
};

export default NavItems;
