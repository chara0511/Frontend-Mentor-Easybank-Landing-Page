import React, { useContext, useState, useRef } from "react";
import MainContext from "./context/mainContext";

import styled from "styled-components";
import { FormattedIcons } from "./icons";
import { theme } from "../styles";
import NavItems from "./sections/navItems";

const { colors } = theme;

const StyledContainer = styled.div`
  background: ${colors.white};
  border: solid 2px cyan;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25em 5%;

  & .checkbox {
    display: none;
  }
`;

const StyledContainerMenu = styled(StyledContainer)`
  border: black 2px solid;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    ${colors.darkBlue} 0%,
    transparent 100%
  );
  z-index: 1;
`;

const StyledMenu = styled.ul`
  background: ${colors.white};
  border-radius: 8px;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: 100%;
  margin-top: -10em;
`;

const Nav = () => {
  const { data } = useContext(MainContext);
  const { nav } = data;
  const { name, icons, items } = nav;

  const [checked, setChecked] = useState(false);

  const ref = useRef(null);

  return (
    <>
      <StyledContainer>
        <FormattedIcons name={name} />

        <input
          id="checkbox"
          className="checkbox"
          type="checkbox"
          ref={ref}
          onChange={() => setChecked(ref.current.checked)}
        />

        <label htmlFor="checkbox">
          <FormattedIcons name={icons[0].name} />
        </label>
      </StyledContainer>

      {checked ? (
        <StyledContainerMenu>
          <StyledMenu>
            {items.map((item, index) => (
              <NavItems key={index} item={item} />
            ))}
          </StyledMenu>
        </StyledContainerMenu>
      ) : null}
    </>
  );
};

export default Nav;
