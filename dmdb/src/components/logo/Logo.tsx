import React from 'react';
import MovieLogo from '../../assets/images/logo.png';
import {LogoWrapper, LogoImg, LogoText, StyledLink} from '../styles/LogoStyles';

export function Logo() {
    return (
        <StyledLink to="/">
            <LogoWrapper>
                <LogoImg>
                    <img src={MovieLogo} alt="Movie logo"/>
                </LogoImg>
                <LogoText>DMDB</LogoText>
            </LogoWrapper>
        </StyledLink>
    );
}