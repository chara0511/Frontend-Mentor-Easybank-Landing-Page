import React from "react";
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
`;

const Footer = () => {
  return (
    <StyledBackground>
      <StyledContainer>
        <div class="footer-body">
          <article>
            <img class="pt" src="./images/logo-footer.svg" alt="" />
            <ul class="footer-icons">
              <li>
                <img class="icon" src="./images/icon-facebook.svg" alt="" />
              </li>
              <li>
                <img class="icon" src="./images/icon-youtube.svg" alt="" />
              </li>
              <li>
                <img class="icon" src="./images/icon-twitter.svg" alt="" />
              </li>
              <li>
                <img class="icon" src="./images/icon-pinterest.svg" alt="" />
              </li>
              <li>
                <img class="icon" src="./images/icon-instagram.svg" alt="" />
              </li>
            </ul>
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
        </div>
      </StyledContainer>
    </StyledBackground>
  );
};

export default Footer;
