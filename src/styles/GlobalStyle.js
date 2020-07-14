import { createGlobalStyle } from "styled-components";
import FontFaces from "./fonts";
import theme from "./theme";

const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
${FontFaces}

html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    font-family: ${fonts.PublicSans};
    font-size: ${fontSizes.lg};
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.limeGreen};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.darkBlue};
  }

  p {
    color:${colors.grayishBlue}
  }

  img {
    width: 100%;
    vertical-align: middle;
  }

   button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
      outline-color: ${colors.limeGreen};
    }
  }

  ul {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        position: relative;
      }
  }
  
  `;
export default GlobalStyle;
