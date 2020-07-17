import React, { useContext } from "react";
import MainContext from "./context/mainContext";

import styled from "styled-components";
import { FormattedIcons } from "./icons";
import { theme } from "../styles";

const { colors } = theme;

const StyledContainer = styled.div`
  background: ${colors.white};
  border: solid 2px cyan;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25em 5%;
`;

const Nav = () => {
  const { data } = useContext(MainContext);
  const { nav } = data;
  const { name, icons } = nav;

  return (
    <StyledContainer>
      <FormattedIcons name={name} />
      <FormattedIcons name={icons[0].name} />
    </StyledContainer>
  );
};

export default Nav;
