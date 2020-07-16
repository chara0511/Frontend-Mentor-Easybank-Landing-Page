import React from "react";
import styled from "styled-components";
import { FormattedIcons } from "../icons";
import { theme } from "../../styles";

const { colors } = theme;

const StyledContainer = styled.li`
  margin-left: 0.5em;
  margin-right: 0.5em;
  margin-top: 0.25em;
`;

const StyledIcon = styled.a`
  width: 25px;
  height: 25px;

  & svg path:hover {
    fill: ${colors.limeGreen};
  }
`;

const Items = ({ icon }) => {
  return (
    <StyledContainer>
      <StyledIcon href={icon.link} target="_blank" rel="noopener noreferrer">
        <FormattedIcons name={icon.name} />
      </StyledIcon>
    </StyledContainer>
  );
};

export default Items;
