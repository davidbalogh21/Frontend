import styled from "styled-components"
import {NavLink} from "react-router-dom"


export const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

export const LinksWrapper = styled.ul`
  margin: 1em 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

export const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 1.2rem;
  display: flex;
  margin-bottom: 10px;
`;


export const Marginer = styled.div`
  height: 2em;
`;

export const StyledLink = styled(NavLink)
    `
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`