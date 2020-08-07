import React, { useContext, useState, useRef } from "react";
import MainContext from "./context/mainContext";

import styled from "styled-components";
import { FormattedIcons, Logo } from "./icons";
import { theme, media, Button } from "../styles";
import NavItems from "./sections/navItems";

const { colors } = theme;

const StyledContainerMobile = styled.div`
  background: ${colors.white};
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

  & .iconHamburger,
  & .iconClose {
    cursor: pointer;
  }

  & .iconHamburger:active {
    transition: transform 0.3s ease;
    transform: rotate(90deg);
  }

  & .iconClose:active {
    transition: transform 0.3s ease;
    transform: rotate(-90deg);
  }

  ${media.smDesktop`
    display: none;
  `}
`;

const StyledContainerDesktop = styled(StyledContainerMobile)`
  display: none;

  ${media.smDesktop`
    display: flex;
    padding: 0 5%;
    height: 3.5em;

  `}

  ${media.mdDesktop`
    display: flex;
    padding: 0 8%;
  `}

   ${media.lgDesktop`
    display: flex;
    padding: 0 10%;
  `}
`;

const StyledContentMenu = styled(StyledContainerMobile)`
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

const StyledMenuMobile = styled.ul`
  background: ${colors.white};
  border-radius: 8px;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: 100%;
  margin-top: -5em;
`;

const StyledMenuDesktop = styled(StyledMenuMobile)`
  margin: 0 auto;
  padding: 0;
  display: flex;
  width: 60%;

  ${media.mdDesktop`
    width: 50%;
  `}

  ${media.lgDesktop`
    width: 40%;
  `}
`;

const Nav = () => {
  const { data } = useContext(MainContext);
  const { nav } = data;
  const { name, name2, icons, items } = nav;

  const [checked, setChecked] = useState(false);

  const ref = useRef(null);

  const navItems = items.map((item, index) => (
    <NavItems key={index} item={item} />
  ));

  return (
    <>
      <StyledContainerMobile>
        <FormattedIcons name={name} />

        <input
          id="checkbox"
          className="checkbox"
          type="checkbox"
          ref={ref}
          onChange={() => setChecked(ref.current.checked)}
        />

        <label htmlFor="checkbox">
          {checked ? (
            <FormattedIcons name={icons[1].name} />
          ) : (
            <FormattedIcons name={icons[0].name} />
          )}
        </label>
      </StyledContainerMobile>

      {checked ? (
        <StyledContentMenu>
          <StyledMenuMobile>{navItems}</StyledMenuMobile>
        </StyledContentMenu>
      ) : null}

      <StyledContainerDesktop>
        <Logo name={name2} />

        <StyledMenuDesktop>{navItems}</StyledMenuDesktop>

        <Button>Request Invite</Button>
      </StyledContainerDesktop>
    </>
  );
};

export default Nav;
