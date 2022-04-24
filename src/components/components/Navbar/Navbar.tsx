import React, {useState} from 'react';
import { Logo } from '../Logo/Logo';
import { Accessibility } from './Accessibility';
import { NavLinks } from './NavLinks';
import { MobileNavLinks } from './MobileNavLinks';
import { LeftSection, MiddleSection, NavbarContainer, RightSection } from './Navbar.css';
import SearchBar from "material-ui-search-bar";

export function Navbar() {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const isMobile = window.innerWidth < 768;

	return (
		<NavbarContainer>
			<LeftSection>
				<Logo/>
			</LeftSection>
			<MiddleSection>{!isMobile && <NavLinks/>}
				<SearchBar
					onChange={(e) => setSearchQuery(e)}
					onRequestSearch={() => window.location.replace(`/search?q=${searchQuery}`)}
					style={{
						right: 125,
						top: 8,
						position: 'absolute',
						margin: 'auto',
						maxWidth: 500,
					}}
				/></MiddleSection>
			<RightSection>
				{!isMobile && <Accessibility/>}
				{isMobile && <MobileNavLinks/>}
			</RightSection>
		</NavbarContainer>
	);
}