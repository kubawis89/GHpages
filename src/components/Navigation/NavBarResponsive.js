import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

import NavLinks from "./NavLinks/NavLinks";
import NarrowNavLinks from "./NavLinks/NarrowNavLinks";

import styled from "styled-components";

const NavContainer = styled.div`
  position: sticky;
  top: -1px;
  width: 100%;
  min-width: 320px;
  background-color: #1c74b2;
  box-shadow: 0px 0px 30px 10px rgba(47, 51, 54, 1);
  text-align: center;
  display: flex;
  aligin-items: center;
  justify-content: center;
  margin: 0;
  padding: 10px 0;
  @media only screen and (max-width: 319px) {
    display: none;
  }
`;

const NarrowScreen = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ActiveLinkSection = styled.div`
  width: 90%;
  text-align: center;
`;

const ResponsiveMenuSection = styled.div`
  width: 10%;
  text-align: center;
`;

const WideScreenMenu = styled.div`
  display: flex;
`;

const ActivePath = styled.p`
  width: 100%;
  color: #0a2b42;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
  margin-left: 5%;
}
`;

function NavBarResponsive() {
  const isMobile = useMediaQuery({ maxWidth: "680px" });
  const location = useLocation();

  const [isClose, setClose] = useState(true);

  return (
    <NavContainer>
      {isMobile && (
        <NarrowScreen>
          <ActiveLinkSection>
            {isClose && <ActivePath>{location.pathname.substr(1)}</ActivePath>}
          </ActiveLinkSection>
          <ResponsiveMenuSection>
            <NarrowNavLinks sendToggle={(isClose) => setClose(isClose)} />
          </ResponsiveMenuSection>
        </NarrowScreen>
      )}
      <WideScreenMenu>{!isMobile && <NavLinks />}</WideScreenMenu>
    </NavContainer>
  );
}

export default NavBarResponsive;
