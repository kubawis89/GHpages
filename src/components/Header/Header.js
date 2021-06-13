import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const HeaderContainer = styled.header`
  margin: 0;
  background-color: #2f3336;
  color: #efefef;
  font-family: "Open Sans", sans-serif;
  width: 100%;
`;

const Logo = styled.h1`
  font-size: 38px;
  color: #ddd;
  text-align: center;
  letter-spacing: 6px;
  padding: 30px 0 30px 0;
  font-weight: 700;
  display: block;
  &:hover {
    transform: scale(1.02);
  }

  @media only screen and (max-width: 319px) {
    min-width: 100px;
    font-size: 25px;
    letter-spacing: 2px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/home" style={{ textDecoration: "none" }}>
        <Logo>MEM serwis</Logo>
      </NavLink>
    </HeaderContainer>
  );
}

export default Header;
