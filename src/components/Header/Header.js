import React from "react";
import { NavLink } from "react-router-dom";
// import "./Header.scss";
import styled from "styled-components";

const HeaderContainer = styled.header`
  margin: 0;
  background-color: #2f3336;
  color: #efefef;
  font-family: "Open Sans", sans-serif;
  min-width: 320px;
  width: 100%;
  .logo {
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
  }
  @media only screen and (max-device-width: 319px) {
    min-width: 100px;
    .logo {
      font-size: 20px;
      letter-spacing: 2px;
      font-weight: 700;
      width: 100%;
      &:hover {
        transform: scale(1.02);
      }
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/home" style={{ textDecoration: "none" }}>
        <h1 className="logo">MEM serwis</h1>
      </NavLink>
    </HeaderContainer>
  );
}

export default Header;
