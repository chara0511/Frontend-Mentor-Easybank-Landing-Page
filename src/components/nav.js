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
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25em 5%;

  & .checkbox {
    display: none;
  }
`;

const StyledMenu = styled.ul`
  border: black 2px solid;
  position: fixed;
  top: 5em;
  left: 5%;
  right: 5%;
  background: ${colors.white};
  z-index: 1;
  border-radius: 8px;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  box-shadow: -5px -5px 40px 15px ${colors.darkBlue};
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
        <StyledMenu>
          {items.map((item, index) => (
            <NavItems key={index} item={item} />
          ))}
        </StyledMenu>
      ) : null}
    </>
  );
};

export default Nav;
