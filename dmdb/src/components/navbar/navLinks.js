import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../contexts/MenuContext";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
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

const navStyle = {
  textTransform: "uppercase",
  textDecoration: "none",
  color: "inherit",
  fontSize: "inherit",
};

export function NavLinks() {
  const routes = useContext(MenuContext);

  return (
    <NavLinksContainer>
      <LinksWrapper>
        {routes.map((route) => (
          <LinkItem key={`id${route.route}`}>
            <NavLink
              style={navStyle}
              exact
              to={route.route}
            >
              {route.label}
            </NavLink>
          </LinkItem>
        ))}
      </LinksWrapper>
    </NavLinksContainer>
  );
}
