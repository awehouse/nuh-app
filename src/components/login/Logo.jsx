import React from "react";
import styled from "styled-components";

import logo from "../../assets/login/logo.png";

const StyledImage = styled.img`
  width: 70vw;
  padding-top: 30px;
`;

const Logo = () => {
  return (
    <div>
      <StyledImage src={logo} alt="" />
    </div>
  );
};

export default Logo;
