import React from 'react';
import MovieLogo from '../../../assets/images/logo.png';
import { LogoImg, LogoText, LogoWrapper, StyledLink } from './Logo.css';

export function Logo() {
	return (
		<StyledLink to="/">
			<LogoWrapper>
				<LogoImg>
					<img src={MovieLogo} alt="Movie logo"/>
				</LogoImg>
				<LogoText>WeWatch</LogoText>
			</LogoWrapper>
		</StyledLink>
	);
}