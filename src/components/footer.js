import React, { useContext } from "react";
import MainContext from "./context/mainContext";

import Items from "./sections/items";
import MenuItems from "./sections/menuItems";

import styled from "styled-components";
import { theme, Button } from "../styles";

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
  padding-bottom: 2.2em;
`;

const StyledLogo = styled.div`
  background-image: url(${(props) => props.logo});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 22px;
  margin-top: 2.2em;
  margin-bottom: 1.7em;
`;

const StyledItems = styled.ul`
  border: 3px solid orange;
  display: flex;
  justify-content: center;
`;

const StyledItemsMenu = styled(StyledItems)`
  display: block;
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
          <StyledLogo logo={social.logo} />

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

        <article>
          <Button>Request Invite</Button>

          <StyledCopy>{other.copy}</StyledCopy>
        </article>
      </StyledContainer>
    </StyledBackground>
  );
};

export default Footer;
