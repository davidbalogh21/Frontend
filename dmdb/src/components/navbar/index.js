import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../devices";
import { MobileNavLinks } from "./mobileNavLinks";

const NavbarContainer = styled.div`
  width: 100%;
  height: 8.5vh;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  margin-bottom: 0.5vh;
`;

const LeftSection = styled.div`
  flex: 5%;
  display: flex;
`;

const MiddleSection = styled.div`
  flex: 90%;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  flex: 5%;
  display: flex;
`;

export function Navbar() {
  
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}
