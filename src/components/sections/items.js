import React from "react";
import styled from "styled-components";

const StyledContainer = styled.li`
  margin-left: 0.5em;
  margin-right: 0.5em;
  margin-top: 0.25em;
`;

const StyledIcon = styled.a`
  background: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 25px;
  height: 25px;
`;

const Items = ({ icon }) => {
  return (
    <StyledContainer>
      <StyledIcon
        href={icon.link}
        target="_blank"
        rel="noopener noreferrer"
        icon={icon.src}
      />
    </StyledContainer>
  );
};

export default Items;
