import React from "react";
import styled from "styled-components";

import Credentials from "./Credentials";
import ForgotPass from "./ForgotPassword";

const padding = 16;

const Container = styled.div`
  width: calc(100vw - ${2 * padding}px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0px ${padding}px;
`;

const SignIn = styled.div`
  color: #003676;
  font-family: Nunito Sans;
  font-size: 2.5em;
  margin-bottom: 14px;
`;

const Form = () => {
  return (
    <Container>
      <SignIn>Sign In</SignIn>
      <Credentials />
      <ForgotPass />
    </Container>
  );
};

export default Form;
