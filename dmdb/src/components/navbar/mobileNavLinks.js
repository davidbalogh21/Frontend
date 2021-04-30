import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import {MenuContext } from "../contexts/MenuContext"
import {NavLink} from "react-router-dom"


const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
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

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 1.2rem;
  display: flex;
  margin-bottom: 10px;
`;


const Marginer = styled.div`
  height: 2em;
`;

const navStyle = {
  textDecoration: "none",
  color: "inherit",
  fontSize: "inherit",
};

export function MobileNavLinks() {

  const routes = useContext(MenuContext);
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
        <Marginer/>
          {routes.map((route) => (
          <LinkItem>
          <NavLink style = {navStyle} exact to={route.route}>{route.label}</NavLink>
          </LinkItem>
        ))}
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}