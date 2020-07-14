import React from "react";
import styled from "styled-components";

const StyledContainer = styled.li`
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

const StyledIcon = styled.a`
  background: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 25px;
  height: 25px;

  &:hover {
    background: black;
  }
`;

const Items = ({ icon }) => {
  return (
    <StyledContainer>
      <StyledIcon icon={icon.src} />
    </StyledContainer>
  );
};

{
  /* <li>
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
      </li> */
}

export default Items;
