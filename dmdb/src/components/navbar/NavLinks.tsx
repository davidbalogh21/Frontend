import React, { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";
import {
  NavLinksContainer,
  LinksWrapper,
  LinkItem,
  LinkStyle,
} from "../styles/LinkStyles";

interface MenuItems {
  route: string;
  label: string;
}

export function NavLinks() {
  const routes = useContext<MenuItems[]>(MenuContext);

  return (
    <NavLinksContainer>
      <LinksWrapper>
        {routes.map((route) => (
          <LinkItem key={`id${route.route}`}>
            <LinkStyle exact to={route.route}>
              {route.label}
            </LinkStyle>
          </LinkItem>
        ))}
      </LinksWrapper>
    </NavLinksContainer>
  );
}
