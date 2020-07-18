import React, { useContext } from "react";
import MainContext from "./context/mainContext";

import Items from "./sections/items";
import MenuItems from "./sections/menuItems";

import styled from "styled-components";
import { theme, Button, media } from "../styles";
import { Logo } from "./icons";

const { colors, fontSizes } = theme;

const StyledBackground = styled.div`
  background: ${colors.darkBlue};

  & .attribution {
    font-size: 11px;
    text-align: center;
    color: ${colors.grayishBlue};
  }
  & .attribution a {
    color: hsl(228, 45%, 44%);
  }
`;

const StyledContainer = styled.footer`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  display: grid;
  row-gap: 1em;
  padding-top: 2.2em;
  padding-bottom: 2.2em;

  ${media.mdDesktop`
    width: 85%;
  `};

  ${media.lgDesktop`
    width: 80%;
  `};

  & .box {
    ${media.mdDesktop`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  `};
  }

  ${media.mdTablet`
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1em;
    padding-top: 40px;
  `};
`;

const StyledLogo = styled.div`
  width: 100%;
  height: 22px;
  margin-top: 1em;
  margin-bottom: 1.7em;

  & svg .logo {
    fill: ${colors.white};
  }

  ${media.mdDesktop`
    margin-bottom: 3.3em;
    text-align: left;
  `};
`;

const StyledItems = styled.ul`
  display: flex;
  justify-content: center;

  ${media.mdDesktop`
    justify-content: left;
  `};
`;

const StyledItemsMenu = styled(StyledItems)`
  display: block;

  ${media.mdTablet`
    columns: 2;
    text-align: left;
  `};
`;

const StyledCopy = styled.p`
  padding-top: 1em;
  font-size: ${fontSizes.sm};
`;

const Footer = () => {
  const { data } = useContext(MainContext);
  const { footer } = data;
  const { social, menu, other } = footer;

  return (
    <StyledBackground>
      <StyledContainer>
        <article>
          <StyledLogo>
            <Logo name={social.name2} />
          </StyledLogo>

          <StyledItems>
            {social.icons.map((icon, index) => (
              <Items key={index} icon={icon} />
            ))}
          </StyledItems>
        </article>

        <article>
          <StyledItemsMenu>
            {menu.map((item, index) => (
              <MenuItems key={index} item={item} />
            ))}
          </StyledItemsMenu>
        </article>

        <article className="box">
          <Button>Request Invite</Button>
          <StyledCopy>{other.copy}</StyledCopy>
        </article>
      </StyledContainer>

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/jcarlos0511">Chara-</a>.
      </div>
    </StyledBackground>
  );
};

export default Footer;
