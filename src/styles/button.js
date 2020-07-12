import styled from "styled-components";
import theme from "./theme";

const { colors, fontSizes } = theme;

const Button = styled.button`
  background: linear-gradient(
    to right,
    ${colors.limeGreen},
    ${colors.brightCyan}
  );
  padding: 1em 2.25em;
  color: ${colors.white};
  font-size: ${fontSizes.sm};
  font-weight: 700;
  border-radius: 35px;
`;

export default Button;
