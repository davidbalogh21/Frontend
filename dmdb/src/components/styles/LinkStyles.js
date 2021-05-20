import styled from 'styled-components'
import {
    Link
} from 'react-router-dom';

export const NavLinksContainer = styled.div `
height: 100%;
display: flex;
align-items: center;
`;

export const LinksWrapper = styled.ul `
margin: 0;
padding: 0;
display: flex;
height: 100%;
list-style: none;
`;

export const LinkItem = styled.li `
height: 100%;
padding: 0 1.1em;
color: #222;
font-weight: 500;
font-size: 1.2em;
align-items: center;
justify-content: center;
display: flex;
border-top: 2px solid transparent;
transition: all 220ms ease-in-out;
&:hover {
  border-top: 2px solid #ff1d36;
}
`;

export const LinkStyle = styled(Link)
`
  text-decoration: none;
  font-size: inherit;
  color: inherit;
  text-transform: uppercase;
}`;

export const Button = styled.div`
  z-index: 99;
  cursor: pointer;
`;