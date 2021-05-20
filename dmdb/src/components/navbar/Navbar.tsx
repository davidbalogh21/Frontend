import React from "react";
import { Logo } from "../logo/Logo";
import { Accessibility } from "./Accessibility"
import { NavLinks } from "./NavLinks";
import { MobileNavLinks } from "./MobileNavLinks";
import {NavbarContainer, LeftSection, MiddleSection, RightSection} from "../styles/NavbarStyles"

export function Navbar() {

  const isMobile = window.innerWidth < 768 ? true : false;

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
