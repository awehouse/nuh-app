import React from "react";
import styled from "styled-components";

import Logo from "../login/Logo";
import Form from "../login/Form/";
import SignInButton from "../login/SignInButton";

// const Title = styled.h2`
//   color: #003676;
//   padding-left: 20px;
// `;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > div {
    outline: 1px solid white;
  }
`;

const Login = () => {
  return (
    <Container>
      <Logo />
      <Form />
      <SignInButton />
    </Container>
  );
};

export default Login;
