import React from "react";

import styled from "styled-components";

const Wrapper = styled.section`
  width: 325px;
  border: 1px solid green;
  margin: 0 auto;

  & .mockups {
    border: 1px solid blue;
    width: 325px;
    margin-top: -35px;
  }

  & .hero {
    text-align: center;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <img className="mockups" src="./images/image-mockups.png" alt="" />

      <div className="hero">
        <h1>Next generation digital banking</h1>

        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <button>Request Invite</button>
      </div>
    </Wrapper>
  );
};

export default Hero;
