import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.div`
  width: 29px;
  height: 29px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const LogoText = styled.h2`
  font-size: 1.2em;
  margin-left: 10px;
  color: #222;
  font-weight: 500;
`;

export const StyledLink = styled(NavLink)
	`
      text-decoration: none;
      color: inherit;
      font-size: inherit;
	`;