import React from "react";
import {NavLink} from "react-router-dom"
import styled from "styled-components";
import MovieLogo from "../../assets/images/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 29px;
  height: 29px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 1.2em;
  margin: 0;
  margin-left: 10px;
  color: #222;
  font-weight: 500;
`;

const navStyle = {
  textDecoration: "none",
  color: "inherit",
  fontSize: "inherit",
};

export function Logo() {
  return (
      <NavLink to = "/" style={navStyle}>
    <LogoWrapper>
      <LogoImg>
        <img src={MovieLogo} alt="Movie logo" />
      </LogoImg>
      <LogoText>DMDB</LogoText>
    </LogoWrapper>
    </NavLink>
  );
}