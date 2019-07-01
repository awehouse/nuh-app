import React from "react";
import styled from "styled-components";

const margin = 6;
const paddingTB = 14;
const paddingLR = 6;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const InputBox = styled.input`
  width: calc(100vw - (2 * 24px));
  box-shadow: 1px 1px 4px #b3b3b3;
  border-radius: 5px;
  padding: ${paddingTB}px ${paddingLR}px;
  margin: ${margin}px 0px;
  border: 1px solid #f2f2f2;
  font-family: Nunito Sans;
  font-size: 1.2em;
`;

const Credentials = () => {
  return (
    <Container>
      <form action="">
        <InputBox type="text" placeholder="Email" />
        <br />
        <InputBox type="text" placeholder="Password" />
      </form>
    </Container>
  );
};

export default Credentials;
