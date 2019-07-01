import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  outline: 1px solid white;
  font-family: Nunito Sans;
  font-weight: bold;
  font-size: 34px;
  text-decoration: none;
  background-color: #0167bb;
  color: white;
  align-self: stretch;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;

  &:visited {
    color: white;
  }
`;

const BottomButton = ({ children, to }) => {
  return (
    <StyledLink to={to}>
      <div>{children}</div>
    </StyledLink>
  );
};

export default BottomButton;
