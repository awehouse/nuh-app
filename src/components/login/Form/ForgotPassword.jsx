import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  align-self: flex-end;
  font-family: Nunito Sans;
  font-size: 0.8em;
  color: #cccccc;
  text-decoration: none;

  &:visited {
    color: #cccccc;
  }
`;

const ForgotPass = () => {
  return <Container to="/reset-password">Forgot Password?</Container>;
};

export default ForgotPass;
