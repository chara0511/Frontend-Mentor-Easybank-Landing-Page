import React, { useContext } from "react";
import MainContext from "./context/mainContext";

import Items from "./sections/items";
import MenuItems from "./sections/menuItems";

import styled from "styled-components";
import { theme, Button, media } from "../styles";
import { FormattedIcons } from "./icons";

const { colors, fontSizes } = theme;

const StyledBackground = styled.div`
  background: ${colors.darkBlue};
  border: 1px solid red;
`;

const StyledContainer = styled.footer`
  border: 5px solid green;
  width: 90%;
  border: 1px solid black;
  margin: 0 auto;
  text-align: center;
  display: grid;
  row-gap: 1em;
  padding-top: 2.2em;
  padding-bottom: 2.2em;

  & .box {
    ${media.mdDesktop`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end`};
  }

  ${media.mdTablet`
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1em;
    padding-top: 40px;`};
`;

const StyledLogo = styled.div`
  width: 100%;
  height: 22px;
  margin-top: 1em;
  margin-bottom: 1.7em;
  border: 1px solid green;

  & svg .logo {
    fill: ${colors.white};
  }

  ${media.mdDesktop`
    margin-bottom: 3.3em`};
`;

const StyledItems = styled.ul`
  border: 3px solid orange;
  display: flex;
  justify-content: center;
`;

const StyledItemsMenu = styled(StyledItems)`
  display: block;

  ${media.mdTablet`
    columns: 2;
    text-align: left;`};
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
            <FormattedIcons name={social.name} />
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
    </StyledBackground>
  );
};

export default Footer;
