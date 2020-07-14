import React, { useContext } from "react";
import MainContext from "./context/mainContext";

import Items from "./sections/items";

import styled from "styled-components";
import { theme } from "../styles";

const { colors } = theme;

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
          <ul class="footer-menu">
            <li>
              <a class="footer-menu-item" href="">
                About Us
              </a>
            </li>
            <li>
              <a class="footer-menu-item" href="">
                Contact
              </a>
            </li>
            <li>
              <a class="footer-menu-item" href="">
                Blog
              </a>
            </li>
            <li>
              <a class="footer-menu-item" href="">
                Careers
              </a>
            </li>
            <li>
              <a class="footer-menu-item" href="">
                Support
              </a>
            </li>
            <li>
              <a class="footer-menu-item" href="">
                Privacy Policy
              </a>
            </li>
          </ul>
        </article>

        <article class="text-right">
          <button class="my">Request Invite</button>

          <p class="mx">© Easybank. All Rights Reserved</p>
        </article>
      </StyledContainer>
    </StyledBackground>
  );
};

export default Footer;
