import React from 'react';
import { Logo } from '../Logo/Logo';
import { Accessibility } from './Accessibility';
import { NavLinks } from './NavLinks';
import { MobileNavLinks } from './MobileNavLinks';
import { LeftSection, MiddleSection, NavbarContainer, RightSection } from './Navbar.css';

export function Navbar() {

	const isMobile = window.innerWidth < 768 ? true : false;

	return (
		<NavbarContainer>
			<LeftSection>
				<Logo/>
			</LeftSection>
			<MiddleSection>{!isMobile && <NavLinks/>}</MiddleSection>
			<RightSection>
				{!isMobile && <Accessibility/>}
				{isMobile && <MobileNavLinks/>}
			</RightSection>
		</NavbarContainer>
	);
}