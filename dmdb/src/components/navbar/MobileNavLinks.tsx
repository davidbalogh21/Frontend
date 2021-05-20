import React, { useState, useContext } from "react";
import { Accessibility } from "./Accessibility";
import MenuToggle from "./MenuToggle";
import {MenuContext } from "../contexts/MenuContext"
import {NavLinksContainer, LinksWrapper, Marginer, LinkItem, StyledLink} from "../styles/MobileStyles"

export function MobileNavLinks() {

  interface RouteInfo {
    route: string;
    label: string;
  }

  const routes = useContext<RouteInfo[]>(MenuContext);
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
        <Marginer/>
          {routes.map((route) => (
          <LinkItem key={`id_${route.route}`}>
          <StyledLink exact to={route.route} key={`id_${route.route}`}>{route.label}</StyledLink>
          </LinkItem>
        ))}
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}